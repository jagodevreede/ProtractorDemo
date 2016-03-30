var gulp = require('gulp');
var config = require('../gulp.config')();
var gulpProtractor = require('gulp-protractor');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
var args = require('yargs').argv;

gulp.task('test', ['e2e']);

gulp.task('e2e', ['e2e-test']);
gulp.task('driver-update', gulpProtractor['webdriver_update']);
gulp.task('e2e-test', ['clean-screenshots', 'driver-update', 'tsc-e2e'], function () {
    var specfile = (args.spec != undefined) ? args.spec : '';
    if (specfile != undefined && specfile < 10) specfile = "0"+specfile;
    gulp.src(config.e2e + '**/' + specfile + '*.spec.js')
    .pipe(gulpProtractor.protractor({
        configFile: 'protractor.conf.js',
        args: ['--baseUrl', config.e2eConfig.seleniumTarget]
    }))
    .on('error', function(e) {
        console.log('Error running E2E testing');
        process.exit(1);
    });
});

function remapCoverage () {
    console.log('Remapping coverage to TypeScript format...');
    gulp.src(config.report.path + 'report-json/coverage-final.json')
        .pipe(remapIstanbul({
            reports: {
                'lcovonly': config.report.path + 'remap/lcov.info',
                'json': config.report.path + 'remap/coverage.json',
                'html': config.report.path + 'remap/html-report',
                'text-summary': config.report.path + 'remap/text-summary.txt'
            }
        }))
        .on('finish', function () {
            console.log('Remapping done! View the result in report/remap/html-report');
        });
}
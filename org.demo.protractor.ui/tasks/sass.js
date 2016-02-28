var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../gulp.config')();
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
    return gulp.src(config.assetsPath.styles + 'main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.assetsPath.styles));
});
 
gulp.task('watch-sass', function () {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
});

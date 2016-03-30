var glob = require('glob');
var seleniumPath = './node_modules/gulp-protractor/node_modules/protractor/selenium/';
var seleniumJarPath = '';

glob(seleniumPath + '*.jar',
    function(err, files) {
        seleniumJarPath = files[0];
    });

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'report/screenshots',
    pathBuilder: function(currentSpec, suites, browserCapabilities) {
        // will return chrome/your-spec-name.png
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
    }
});

exports.config = {
    seleniumServerJar: seleniumJarPath,
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        realtimeFailure: true
    },
    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
        browser.get('/');
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};

module.exports = function (config) {

    config.set({

        // base path that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files & libraries & patterns to load in the browser
        files: [
            {pattern: 'bower_components/**/*.js', included: false},
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'tests/*Spec.js', included: false},
            {pattern: 'tests/**/*Spec.js', included: false},
        ],


        // list of files to exclude
        exlude: [],


        // test results reporter to use
        // possible values:  'dots', 'progress', 'junit', 'growl', 'coverage'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable/disable colors in the output (both for reporters and logs)
        colors: true,


        // levels of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // IMPORTANT!!
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Firefox', 'PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    })
};

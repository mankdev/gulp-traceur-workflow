// Karma configuration
// Generated on Thu May 29 2014 18:45:48 GMT+0400 (MSK)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine', 'requirejs', 'traceur'],


		// list of files / patterns to load in the browser
		files: [
			'inc/es6/**/*.js',
			'test/es6/**/*.spec.js',
			'test/test-main.js'
		],


		// list of files to exclude
		exclude: [

		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'inc/es6/**/*.js': ['traceur'],
			'test/es6/**/*.js': ['traceur']
		},
		traceurPreprocessor: {
			// options passed to the traceur-compiler, see traceur --longhelp for list of options
			options: {
				sourceMap: true,
				blockBinding: true,
				modules: 'register'
			}
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};

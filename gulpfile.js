var gulp = require('gulp'),
	glob = require('glob'),
	clean = require('gulp-clean');

gulp.task('scripts-clean', function() {
	gulp.src('inc/js')
		.pipe(clean());
});

gulp.task('scripts', ['scripts-clean'], function(done) {

	//compiling through CLI-tool of traceur for better modules supporting and sourcemaps
	traceurCompileThroughCMD(['inc/es6/**/*.js'],
		['--sourcemap', '--block-binding=true', '--out inc/js/application.js', '--modules=register'], done);
});

function traceurCompileThroughCMD(filePatterns, options, cb) {
	var paths = [],
		commandParts = ['node node_modules/traceur/traceur'],
		exec = require('child_process').exec;

	filePatterns = Array.isArray(filePatterns) ? filePatterns : [filePatterns];
	options = Array.isArray(options) ? options : [options];

	commandParts.push(options.join(' '));

	filePatterns.forEach(function(pattern) {
		paths = Array.prototype.concat(paths, glob.sync(pattern));
	});

	commandParts.push(paths.join(' '));

	exec(commandParts.join(' '), [], function(error, stdout, stderr) {
		cb(stderr);
	});


}

gulp.task('qwe', function() {
	console.log('qwe');
});
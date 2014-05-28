var gulp = require('gulp'),
    glob = require('glob'),
    clean = require('gulp-clean');

gulp.task('scripts-clean', function() {
    gulp.src('inc/js')
        .pipe(clean());
});

gulp.task('scripts', ['scripts-clean'], function(done) {
    var patterns = ['./inc/es6/app.js', './inc/es6/*/index.js', './inc/es6/*/*.js'],
        paths = [],
        exec = require('child_process').exec,
        command = 'node node_modules/traceur/traceur --sourcemap --out inc/js/application.js ',
        subProcess;


    patterns.forEach(function(pattern) {
        paths = Array.prototype.concat(paths, glob.sync(pattern));
    });

    paths = paths.filter(function(pattern, index) {
        return index === paths.indexOf(pattern);
    });

    command += paths.join(' ');

    subProcess = exec(command, [], function() {
        done();
    });
});

gulp.task('qwe', function() {
    console.log('qwe');
});
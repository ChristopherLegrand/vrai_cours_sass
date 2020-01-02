'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function(){
    return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('./assets/scss/**/*.scss',
    gulp.parallel('sass'));
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));



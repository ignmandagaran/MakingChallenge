'use strict';

var gulp = require ('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');

// conversion of sass files to css
gulp.task('sass', () => {
  return gulp.src('./resources/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./resources/css'));
});

// css file minification
gulp.task('css', () => {
    gulp.src('./resources/css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('./resources/css/min/'));
  });

// task automation
gulp.task('run', gulp.parallel('sass', 'css'));

gulp.task('watch', () => {
    gulp.watch('./resources/sass/*.scss', gulp.series('sass'));
    gulp.watch('./resources/css/*.css', gulp.series('css'));
  });

gulp.task('default', gulp.parallel('run', 'watch'));
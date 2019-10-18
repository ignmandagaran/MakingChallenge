'use strict';

var gulp = require ('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');

// conversion of sass files to css
gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// css file minification
gulp.task('css', () => {
    gulp.src('./css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });

// task automation
gulp.task('run', gulp.parallel('sass', 'css'));

gulp.task('watch', () => {
    gulp.watch('./sass/*.sass', gulp.series('sass'));
    gulp.watch('./css/*.css', gulp.series('css'));
  });

gulp.task('default', gulp.parallel('run', 'watch'));
var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('less', function () {  
  gulp.src('main.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});


gulp.task('default', ['less']); 


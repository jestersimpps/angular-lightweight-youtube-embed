var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('compress', function() {
  return gulp.src('src/*.js')
    .pipe(uglify().on('error', function(e) {
      console.log(e);
    }))
    .pipe(gulp.dest('dist'));
});

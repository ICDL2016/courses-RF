var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', ['watch'], function() {
  gulp.src('public/')
    .pipe(server({
      livereload: true,
      fallback: 'index.html'
    }));
});
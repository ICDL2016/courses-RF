var gulp = require('gulp');
var runSequence = require('run-sequence');


//
gulp.task('default', function () {
  runSequence('del', 'jsconcat', 'copyScript', 'imagemin', 'copy', 'copyFont', 'pngonlySprite', 'sass', 'jade', 'watch', 'webserver')
})
//gulp.task('default', ['del', 'svgSprite', 'svg2png', 'pngSprite', 'jade', 'watch']);
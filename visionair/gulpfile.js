var gulp = require('gulp');
var less = require('gulp-less');
var exec = require('child_process').exec;


gulp.task('less', function() {
    exec('lessc --math=strict ./css/custom.less ./style.css');
});
gulp.task('watch', function() {
    gulp.watch('./css/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task
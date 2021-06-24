import gulp from 'gulp';
import * as Tasks from './gulp-tasks/';

gulp.task('build', gulp.parallel(['bower', 'bundle-css', 'bundle-js']));
gulp.task('tests', gulp.parallel(['bower', 'test']));
gulp.task('default', gulp.parallel(['bundle-js', 'bundle-css', 'serve', 'watch-js', 'watch-css']));
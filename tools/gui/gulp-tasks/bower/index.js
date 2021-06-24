import gulp from 'gulp';
import bower from 'gulp-bower';

const bowerTask = () => {
    return bower({
        directory: 'vendor',
        cwd: '../../web/gui/src/main/webapp',
    });
};

const tasks = () => {
    gulp.task('bower', gulp.series(() => bowerTask()));
};

export default tasks();
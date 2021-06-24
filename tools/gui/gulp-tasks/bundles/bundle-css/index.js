import gulp from 'gulp';
import concat from 'gulp-concat';
import BundleResources from '../helpers/bundleResources';
import { reload } from '../../dev-server';

const GUI_BASE = '../../web/gui/src/main/webapp/';
const bundleFiles = [
    'app/onos.css',
    'app/onos-theme.css',
    'app/common.css',
    'app/fw/**/*.css',
    'app/view/**/*.css',
];

const task = () => {

    gulp.task('bundle-css', gulp.series(function () {
        return gulp.src(BundleResources(GUI_BASE, bundleFiles))
            .pipe(concat('onos.css'))
            .pipe(gulp.dest(GUI_BASE + '/dist/'))
            .on('end', () => { reload(); });
    }));

    gulp.task('watch-css', gulp.series(() => {
        gulp.watch([GUI_BASE + 'app/**/*.css'], gulp.series('bundle-css'));
    }));
}

export default task();
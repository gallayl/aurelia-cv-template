import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as project from '../aurelia.json';
import * as path from 'path';
import * as changedInPlace from 'gulp-changed-in-place';

export function prepareFontAwesome() {
  const faSource = 'node_modules/font-awesome/fonts/*';
  const mdSource = 'node_modules/materialize-css/dist/fonts/roboto/*';

  const faFonts = gulp.src(faSource)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`font-awesome/fonts`));

      const mdFonts = gulp.src(mdSource)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`materialize-css/fonts`));

  return merge(faFonts);
}
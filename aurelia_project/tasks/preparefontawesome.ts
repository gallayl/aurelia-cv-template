import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as project from '../aurelia.json';
import * as path from 'path';
import * as changedInPlace from 'gulp-changed-in-place';

export function prepareFontAwesome() {
  const source = 'node_modules/font-awesome';

  const taskFonts = gulp.src(`${source}/fonts/*`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.dist.output}/font-awesome/fonts`));

  return merge(taskFonts);
}
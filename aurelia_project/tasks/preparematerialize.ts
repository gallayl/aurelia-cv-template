import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as project from '../aurelia.json';
import * as path from 'path';

export function prepareMaterialize() {

  let source = 'node_modules/materialize-css/dist';
  let sourceStyle = path.join(source, 'css');
  let sourceFonts = path.join(source, 'fonts/roboto');

  let taskFonts = gulp.src(path.join(sourceFonts, '*'), { base: sourceFonts })
    .pipe(gulp.dest('fonts/roboto'));

  return merge(taskFonts);
}
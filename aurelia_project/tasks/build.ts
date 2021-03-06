import * as gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import processCSS from './process-css';
import { build } from 'aurelia-cli';
import { dist } from './dist';
import { prepareMaterialize } from './prepareMaterialize'
import { prepareFontAwesome } from './preparefontawesome'
import * as project from '../aurelia.json';

export default gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS
  ),
  writeBundles,
  prepareMaterialize,
  prepareFontAwesome,
  dist
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}

import {FrameworkConfiguration} from 'aurelia-framework';
import {TranslateValueConverter} from './value-converters/translate';

export function configure(config: FrameworkConfiguration) {
  config.globalResources(['./value-converters/translate']);
}

import {FrameworkConfiguration} from 'aurelia-framework';
import {TranslateValueConverter} from './value-converters/translate';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './value-converters/translate',
    './value-converters/date-range',
    './elements/google-map',
    './elements/fa-button-link',
    "./elements/tag-list"
    ]);
}

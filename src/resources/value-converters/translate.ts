import { LocalizationService } from '../../services/localizationservice';
import {autoinject} from 'aurelia-framework';

@autoinject
export class TranslateValueConverter {
    constructor(private localization: LocalizationService) { }
  
  toView(value) {
    return this.localization.Get(value);
  }
}


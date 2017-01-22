import { LocalizedString } from '../../models/types';
import { LocalizationService } from '../../services/localizationservice';
import { autoinject } from 'aurelia-framework';

@autoinject
export class TranslateValueConverter {
  constructor(private localization: LocalizationService) { }

  toView(value: string): LocalizedString {
    let translated = this.localization.Get(value);
    return translated;
  }
}


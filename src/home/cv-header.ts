import { LocalizationLanguage } from '../models/enums';
import { LocalizationService } from '../services/localizationservice';
import { Link, LocalizedString } from '../models/types';
import { bindable, autoinject } from 'aurelia-framework';
import { Owner } from '../models/owner';
import {BindingSignaler} from 'aurelia-templating-resources';

@autoinject
export class CvHeader {
  @bindable 
  Owner: Owner;

  public setLanguageEnglish(){
    this.localization.currentLanguage = LocalizationLanguage.English;
    this.signaler.signal('language-changed');
  }

  public setLanguageHungarian(){
    this.localization.currentLanguage = LocalizationLanguage.Hungarian;
    this.signaler.signal('language-changed');
  }

  print(){
    window.print();
  }

  constructor(private localization: LocalizationService, private signaler: BindingSignaler) { }
}


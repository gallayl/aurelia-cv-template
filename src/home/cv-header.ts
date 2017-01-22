import { LocalizationLanguage } from '../models/enums';
import { LocalizationService } from '../services/localizationservice';
import { Link, LocalizedString } from '../models/types';
import { bindable, autoinject } from 'aurelia-framework';
import { Owner } from '../models/owner';

@autoinject
export class CvHeader {
  @bindable 
  Owner: Owner;

  public setLanguageEnglish(){
    this.localization.currentLanguage = LocalizationLanguage.English;
    window.location.reload(); //todo: fixme;
  }

  public setLanguageHungarian(){
    this.localization.currentLanguage = LocalizationLanguage.Hungarian;
    window.location.reload(); //todo: fixme;
  }

  print(){
    window.print();
  }

  constructor(private localization: LocalizationService) {
    
  }
}


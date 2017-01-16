import { LocalizedString } from '../../models/types';
import { bindable } from 'aurelia-framework';
import { Owner } from '../../models/owner';

export class CvHeader {
  @bindable 
  Title: LocalizedString;
  
  @bindable 
  SubTitle: LocalizedString;

  TitleChanged(newValue, oldValue) {

  }

  SubTitleChanged(newValue, oldValue) {

  }
}


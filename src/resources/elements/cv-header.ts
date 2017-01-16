import { Link, LocalizedString } from '../../models/types';
import { bindable } from 'aurelia-framework';
import { Owner } from '../../models/owner';

export class CvHeader {
  @bindable 
  Title: LocalizedString;
  
  @bindable 
  SubTitle: LocalizedString;

  @bindable
  Image: Link;

  TitleChanged(newValue, oldValue) {

  }

  SubTitleChanged(newValue, oldValue) {

  }
}


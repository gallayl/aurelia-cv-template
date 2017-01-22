import { Link } from '../../models/types';
import {bindable} from 'aurelia-framework';

export class FaButtonLink {
  @bindable iconName : string;
  @bindable linkUrl : Link;
  @bindable title : string;
  @bindable target: string;

  iconNameChanged(newValue, oldValue) { }

  linkUrlChanged(newValue, oldValue) { }

  titleChanged(newValue, oldValue) { }
}


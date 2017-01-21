import {bindable} from 'aurelia-framework';

export class FaButtonLink {
  @bindable iconName : string;
  @bindable linkUrl : string;
  @bindable title : string;
  @bindable target: string;

  iconNameChanged(newValue, oldValue) { }

  linkUrlChanged(newValue, oldValue) { }

  titleChanged(newValue, oldValue) { }
}


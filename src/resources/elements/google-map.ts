import { Guid } from './../../utils/guit';
import {bindable} from 'aurelia-framework';

export class GoogleMap {
  @bindable Address: string;
  @bindable Query: string;

  private Guid: string;
  constructor() {
    this.Guid = Guid.newGuid();
  }


  valueChanged(newValue, oldValue) {

  }
}


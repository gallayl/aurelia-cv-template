import { MdModal } from 'aurelia-materialize-bridge/dist/es6';
import { IHasLocation } from './../../interfaces/ihaslocation';
import { Guid } from './../../utils/guit';
import {bindable} from 'aurelia-framework';

export class GoogleMap {
  @bindable Item: IHasLocation
  private modal: MdModal;
  openMap($event: Event){
    this.modal.open();
  }

}


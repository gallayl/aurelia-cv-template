import { Link, LocalizedString } from '../../models/types';
import { bindable } from 'aurelia-framework';
import { Owner } from '../../models/owner';

export class CvHeader {
  @bindable 
  Owner: Owner;
}


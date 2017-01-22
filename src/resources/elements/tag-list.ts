import { Tag } from './../../models/tag';
import {bindable} from 'aurelia-framework';

export class TagList {
  @bindable tags: Tag[];
}


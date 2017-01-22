import { Project } from './../models/project';
import { bindable, autoinject } from 'aurelia-framework';

export class Projects{
    @bindable Projects:Project[];
}
import { School } from '../models/school';
import { SchoolService } from '../services/schoolservice';
import { LocalizationService } from '../services/localizationservice';
import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class Schools {

    @bindable
    public Schools: School[];

    constructor(private localization: LocalizationService, schoolService: SchoolService) {
        this.Schools = schoolService.Get();
    }
}
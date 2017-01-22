import { School } from '../models/school';
import { SchoolService } from '../services/schoolservice';
import { LocalizationService } from '../services/localizationservice';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Schools {

    public Schools: School[];

    constructor(private localization: LocalizationService, schoolService: SchoolService) {
        this.Schools = schoolService.Get();
    }
}
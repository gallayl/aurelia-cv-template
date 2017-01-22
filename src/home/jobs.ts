import { Job } from './../models/job';
import { JobService } from './../services/jobservice';
import { Employer } from './../models/employer';
import { School } from '../models/school';
import { SchoolService } from '../services/schoolservice';
import { LocalizationService } from '../services/localizationservice';
import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class Works {

    @bindable public Jobs: Job[];

    constructor(private localization: LocalizationService, jobService: JobService) {
        this.Jobs = jobService.Get();
    }
}
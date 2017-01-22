import { Job } from './../models/job';
import { JobService } from './../services/jobservice';
import { Employer } from './../models/employer';
import { School } from '../models/school';
import { SchoolService } from '../services/schoolservice';
import { LocalizationService } from '../services/localizationservice';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Works {

    public Jobs: Job[];

    constructor(private localization: LocalizationService, jobService: JobService) {
        this.Jobs = jobService.Get();
    }
}
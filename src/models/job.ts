import { Project } from './project';
import { LocalizedString } from './types';
import {Employer} from './employer';

export class Job {
    Employer: Employer;
    FromDate: Date;
    UntilDate?: Date;
    Title: LocalizedString;
    Responsibilities: LocalizedString;
    Projects: Project[]
}
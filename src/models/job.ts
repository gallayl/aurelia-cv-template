import { Project } from './project';
import { LocalizedString } from './types';
import {Employer} from './employer';

export class Job {
    Employer: Employer;
    From: Date;
    Until?: Date;
    JobTitle: LocalizedString;
    Responsibilities: LocalizedString;
    Projects: Project[]
}
import { Project } from './project';
import { LocalizedResource } from './localizedresource';
import {Employer} from './employer';

export class Job {
    Employer: Employer;
    From: Date;
    Until: Date;
    JobTitle: LocalizedResource;
    Responsibilities: LocalizedResource;
    Projects: Project[]
}
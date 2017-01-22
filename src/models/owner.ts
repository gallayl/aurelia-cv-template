import { IHasLocation } from './../interfaces/ihaslocation';
import { Hobby } from './hobby';
import { Project } from './project';
import { Job } from './job';
import { School } from './school';
import { Link, LocalizedString } from './types';

export class Owner implements IHasLocation {
    Name: string;
    Title: LocalizedString;
    Email: string;
    Phone: string;
    BirthDate: Date;
    BirthPlace: string;
    PhotoURL: Link;

    LinkedinProfileUrl: Link;
    GithubProfileUrl: Link;
    StackOwerflowProfileUrl: Link;
    GooglePlusProfileUrl: Link;
    FacebookProfileUrl: Link;

    Address: LocalizedString;
    LocationQuery: Link;
}
import { Hobby } from './hobby';
import { Project } from './project';
import { Job } from './job';
import { School } from './school';
import { Link, LocalizedString } from './types';

export class Owner {
    Name: string;
    Email: string;
    Phone: string;
    Address: LocalizedString;
    BirthDate: Date;
    BirthPlace: string;
    PhotoURL: Link;
    Summary: LocalizedString;

    Schools: School[];
    Jobs: Job[];
    Projects: Project[];
    Hobbies: Hobby[];

}
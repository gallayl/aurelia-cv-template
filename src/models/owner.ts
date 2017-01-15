import { Hobby } from './hobby';
import { Project } from './project';
import { Job } from './job';
import { School } from './school';
import { Link } from './types';
import { LocalizedResource } from './localizedresource';

export class Owner {
    Name: string;
    Email: string;
    Phone: string;
    Address: LocalizedResource;
    BirthDate: Date;
    BirthPlace: string;
    PhotoURL: Link;
    Summary: LocalizedResource;

    Schools: School[];
    Jobs: Job[];
    Projects: Project[];
    Hobbies: Hobby[];

}
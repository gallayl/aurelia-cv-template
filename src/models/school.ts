import { IHasLocation } from './../interfaces/ihaslocation';
import { Link, LocalizedString } from './types';
import { Tag } from './tag';

export class School  implements IHasLocation{
    Name: LocalizedString;
    Type: string;
    Description: LocalizedString;
    Homepage: Link;
    Tags: Tag[];
    FromDate: Date;
    UntilDate: Date;

    HomepageUrl: Link;

    LocationQuery: string;
    Address: LocalizedString;
}
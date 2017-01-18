import { Link, LocalizedString } from './types';
import { Tag } from './tag';

export class School{
    Name: LocalizedString;
    Type: string;
    Description: LocalizedString;
    Homepage: Link;
    Tags: Tag[];
    MapQuery: string;
    FromDate: Date;
    UntilDate: Date;
}
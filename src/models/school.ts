import { Link, LocalizedString } from './types';
import { Tag } from './tag';

export class School{
    Name: LocalizedString;
    Type: string;
    Description: LocalizedString;
    Homepage: Link;
    Tags: Tag[];
    FromDate: Date;
    UntilDate: Date;
}
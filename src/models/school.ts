import { Link } from './types';
import { Tag } from './tag';
import { LocalizedResource } from './localizedresource';

export class School{
    Name: LocalizedResource;
    Type: string;
    Description: LocalizedResource;
    Homepage: Link;
    Tags: Tag[];
    FromDate: Date;
    UntilDate: Date;
}
import { Tag } from './tag';
import { Link, LocalizedString } from './types';

export class Hobby {
    Name: LocalizedString;
    Description: LocalizedString;
    ImageUrl: Link;
    Link: Link;
    Tags: Tag[];
}
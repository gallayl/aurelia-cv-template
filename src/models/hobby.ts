import { LocalizedResource } from './localizedresource';
import { Tag } from './tag';
import { Link } from './types';

export class Hobby {
    Name: LocalizedResource;
    Description: LocalizedResource;
    ImageUrl: Link;
    Link: Link;
    Tags: Tag[];
}
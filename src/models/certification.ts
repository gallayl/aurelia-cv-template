import { LocalizedResource } from './localizedresource';
import { Link } from './types';
import { Tag } from './tag';

export class Certification{
    IssuerName: string;
    Description: LocalizedResource;
    Url: Link;
    Tags: Tag[];
}
import { Link, LocalizedString } from './types';
import { Tag } from './tag';

export class Certification{
    IssuerName: string;
    Description: LocalizedString;
    Url: Link;
    Tags: Tag[];
}
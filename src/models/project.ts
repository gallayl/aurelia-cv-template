import { Tag } from './tag';
import { LocalizedResource } from './localizedresource';

export class Project{
    Name: LocalizedResource;
    Description: LocalizedResource;
    Tags: Tag[];
}
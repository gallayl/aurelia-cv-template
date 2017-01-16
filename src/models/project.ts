import { LocalizedString } from './types';
import { Tag } from './tag';

export class Project{
    Name: LocalizedString;
    Description: LocalizedString;
    Tags: Tag[];
}
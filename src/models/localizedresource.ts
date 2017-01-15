import { LocalizationLanguage } from './enums';

export class LocalizedResource{
    Key: string;
    Values: [LocalizationLanguage, string][];
}
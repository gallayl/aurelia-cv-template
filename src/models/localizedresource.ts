import { LocalizedKeyValuePair, LocalizedString } from './types';
import { LocalizationLanguage } from './enums';

export class LocalizedResource{
    Key: string;
    Values: LocalizedKeyValuePair[];
}
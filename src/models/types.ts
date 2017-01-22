import { LocalizationLanguage } from './enums';

export type Link = string;
export type LocalizedKeyValuePair = [LocalizationLanguage, LocalizedString];
export type LocalizedString = string;
export type LanguageSkill = 'language-skill-Elementary' | 'language-skill-Limited' | 'language-skill-Professional' | 'language-skill-Native';
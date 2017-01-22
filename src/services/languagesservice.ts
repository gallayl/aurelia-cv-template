import { Language } from './../models/language';

export class LanguageService {

    public Get(): Language[] {
        return [
            {
                Name: "language-hungarian",
                Level: 'language-skill-Native'
            },
            {
                Name: "language-english",
                Level: 'language-skill-Professional'
            },
            {
                Name: "language-german",
                Level: 'language-skill-Elementary'
            }
        ]
    }
}
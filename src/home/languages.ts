import { autoinject, bindable } from 'aurelia-framework';
import { Language } from './../models/language';
import { LanguageService } from './../services/languagesservice';
import { LocalizationService } from './../services/localizationservice';

@autoinject
export class Languages{

    @bindable public Languages: Language[]

    constructor(private languageService:LanguageService) { 
        this.Languages = languageService.Get();
    }
}
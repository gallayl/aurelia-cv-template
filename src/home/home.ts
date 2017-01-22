import { LanguageService } from './../services/languagesservice';
import { LocalizationService } from '../services/localizationservice';
import { Owner } from '../models/owner';
import { OwnerService } from '../services/ownerservice';
import {autoinject, bindable} from 'aurelia-framework';

@autoinject
export class Home{

    @bindable public Owner:Owner;

    constructor(private owner:OwnerService,
                private localization: LocalizationService,
                private languageService: LanguageService) {
        this.Owner = owner.Get();
    }
}
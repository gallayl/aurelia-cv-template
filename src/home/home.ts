import { LocalizationService } from '../services/localizationservice';
import { Owner } from '../models/owner';
import { OwnerService } from '../services/ownerservice';
import {autoinject} from 'aurelia-framework';

@autoinject
export class Home{

    public Owner:Owner;

    constructor(private owner:OwnerService, private localization: LocalizationService) {
        this.Owner = owner.Get();
    }
}
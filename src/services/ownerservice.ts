import { LocalizedString } from '../models/types';
import { JobService } from './jobservice';
import { LocalizationService } from './localizationservice';
import { Owner } from '../models/owner';
import { autoinject } from 'aurelia-framework';

@autoinject
export class OwnerService {

    constructor(private localizations: LocalizationService, private jobs: JobService) {

    }

    public GetOwner(): Owner {
        return {
            Name: "Gallay Lajos",
            Title: this.localizations.Get('owner-title'),
            Address: <LocalizedString>"1144 Budapest, Rákosfalva park 4.",
            Email: "gallay.lajos@gmail.com",
            Summary: this.localizations.Get(""),
            BirthDate: new Date("1985-09-25"),
            BirthPlace: "Budapest, Hungary",
            Phone: "+36 20 530 7414",
            
            PhotoURL: "/assets/lalo.jpg",
            LinkedinProfileUrl: "https://www.linkedin.com/in/gallay-lajos-3b735185"
        };
    }
}
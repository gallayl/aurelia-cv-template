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
            LinkedinProfileUrl: "https://www.linkedin.com/in/gallay-lajos-3b735185",
            GithubProfileUrl: "https://github.com/gallayl",
            StackOwerflowProfileUrl: "http://stackoverflow.com/users/7418775/lajos-gallay",
            GooglePlusProfileUrl: "https://plus.google.com/106743540419438515130",
            FacebookProfileUrl: "https://www.facebook.com/lajos.gallay",

            LocationLink: "https://www.google.hu/maps/place/Budapest,+R%C3%A1kosfalva+park,+1144/@47.5070555,19.1421969,17z/data=!3m1!4b1!4m5!3m4!1s0x4741db54c630b6dd:0x4eecd88d98ab6afa!8m2!3d47.5070519!4d19.1443856?hl=en"
        };
    }
}
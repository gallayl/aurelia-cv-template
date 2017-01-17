import { LocalizationService } from './localizationservice';
import { School } from '../models/school';
import { autoinject } from 'aurelia-framework';

@autoinject
export class SchoolService {

    constructor(private localization: LocalizationService) { }

    public Get(): School[] {
        return [{
            Name: "Verebély László Szakközépiskola",
            Description: "",
            FromDate: new Date("2000-09-01"),
            UntilDate: new Date("2004-06-01"),
            Homepage: "http://www.verebelyszki.hu/",
            Tags: [
                { Name: "ECDL", Url: "" }
            ],
            Type: this.localization.Get("school-vocational-generic")
        }]
    }
}
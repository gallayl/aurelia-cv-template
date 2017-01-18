import { LocalizationService } from './localizationservice';
import { School } from '../models/school';
import { autoinject } from 'aurelia-framework';

@autoinject
export class SchoolService {

    constructor(private localization: LocalizationService) { }

    public Get(): School[] {
        return [
            {
                Name: "LIA Iskola",
                Description: "",
                FromDate: new Date("2008-09-01"),
                UntilDate: new Date("2010-06-01"),
                Homepage: "http://www.liaiskola.hu/",
                Tags: [
                    { Name: "PHP", Url: "" },
                    { Name: "MySQL", Url: "" },
                    { Name: "JavaScript", Url: "" },
                    { Name: "JQuery", Url: "" },
                    { Name: "Flash", Url: "" }
                ],
                MapQuery: "BMSZC+Verebély+László+Szakgimnáziuma+és+Szakközépiskolája",
                Type: this.localization.Get("school-web-development")
            },
            {
                Name: "Verebély László Szakközépiskola",
                Description: "",
                FromDate: new Date("2000-09-01"),
                UntilDate: new Date("2006-06-01"),
                Homepage: "http://www.verebelyszki.hu/",
                Tags: [
                    { Name: "Borland C", Url: "" },
                    { Name: "Turbo Pascal", Url: "" },
                    { Name: "Delphi", Url: "" },
                    { Name: "PHP", Url: "" },
                    { Name: "MySQL", Url: "" },
                    { Name: "Photoshop basics", Url: "" },

                ],
                MapQuery:"", //"BMSZC+Verebély+László+Szakgimnáziuma+és+Szakközépiskolája",
                Type: this.localization.Get("school-vocational-generic") + ', ' + this.localization.Get("school-okj-general-programming")
            }
        ]
    }
}
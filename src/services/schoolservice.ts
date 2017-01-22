import { Link } from '../models/types';
import { LocalizationService } from './localizationservice';
import { School } from '../models/school';
import { autoinject } from 'aurelia-framework';

@autoinject
export class SchoolService {

    constructor(private localization: LocalizationService) { }

    public Get(): School[] {
        return [
            {
                Name: "Microsoft certification 70-480",
                Description: "",
                FromDate: new Date("2015-03-01"),
                UntilDate: new Date("2015-03-01"),
                Homepage: "https://www.microsoft.com/en-us/learning/exam-70-480.aspx",
                Tags: [
                    { Name: "HTML5", Url: "" },
                    { Name: "JavaScript", Url: "" },
                    { Name: "CSS3", Url: "" },
                ],
                LocationQuery: "Budapest,+Budafoki+út+56,",
                Address: "1117 Budapest, Budafoki út 56. 3. emelet",
                Type: "Programming in HTML5 with JavaScript and CSS3",
                HomepageUrl:"https://www.training360.com/"
            },
            {
                Name: "LIA Iskola",
                Description: "",
                FromDate: new Date("2008-09-01"),
                UntilDate: new Date("2010-06-01"),
                Homepage: "http://www.liaiskola.hu/",
                Tags: [
                    { Name: "PHP", Url: "https://secure.php.net/" },
                    { Name: "MySQL", Url: "https://www.mysql.com/" },
                    { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                    { Name: "JQuery", Url: "https://jquery.com/" },
                    { Name: "Flash", Url: "https://en.wikipedia.org/wiki/Adobe_Flash" }
                ],
                LocationQuery: "Lia+Iskola+Budapest,+Dolgos+utca+7,+1126",
                Address: "1126 Budapest, Dolgos utca 7",
                Type: this.localization.Get("school-web-development"),
                HomepageUrl:"http://www.liaiskola.hu/"
            },
            {
                Name: "Verebély László Szakközépiskola",
                Description: "",
                FromDate: new Date("2000-09-01"),
                UntilDate: new Date("2006-06-01"),
                Homepage: "http://www.verebelyszki.hu/",
                Tags: [
                    { Name: "Borland C", Url: "https://en.wikipedia.org/wiki/Borland_Turbo_C" },
                    { Name: "Turbo Pascal", Url: "https://en.wikipedia.org/wiki/Turbo_Pascal" },
                    { Name: "Delphi", Url: "https://en.wikipedia.org/wiki/Delphi_(programming_language)" },
                    { Name: "PHP", Url: "https://secure.php.net/" },
                    { Name: "MySQL", Url: "https://www.mysql.com/" },
                    { Name: "Photoshop basics", Url: "http://www.adobe.com/products/photoshopfamily.html" },

                ],
                LocationQuery: "BMSZC+Verebély+László+Szakgimnáziuma+és+Szakközépiskolája",
                Address: "1139 Budapest, Üteg u. 15",
                Type: this.localization.Get("school-vocational-generic") + ', ' + this.localization.Get("school-okj-general-programming"),
                HomepageUrl:"http://www.verebelyszki.hu/"
            }
        ]
    }
}
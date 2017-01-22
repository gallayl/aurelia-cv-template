import { Job } from './../models/job';
import { LocalizedString } from '../models/types';
import { Language } from '../models/language';
import { LocalizationService } from './localizationservice';
import { autoinject, Aurelia } from 'aurelia-framework';

@autoinject
export class JobService {

    constructor(private localizations: LocalizationService) {
    }

    public Get(): Job[] {

        let jobDigic: Job = {
            Employer: {
                Name: <LocalizedString>"Digic Pictures",
                Description: this.localizations.Get("employer-digic-description"),
                HomePage: "http://digicpictures.com",
                LogoUrl: "/assets/digic-logo.png"
            },
            Address: "Budapest, H-1031 Graphisoft Park Hz. Záhony utca 7.",
            LocationQuery: "Graphisoft+Park+Kft.",
            FromDate: new Date("2015-10-01"),
            UntilDate: null,
            Title: "Production developer",
            Tags: [],
            Projects: [
                {
                    Name: "dProject",
                    Description: this.localizations.Get("digic-project-dProject-description"),
                    Tags: [
                        { Name: "WinForms", Url: "https://en.wikipedia.org/wiki/Windows_Forms" },
                        { Name: "PostgreSQL", Url: "https://www.postgresql.org/" },
                        { Name: "Google API", Url: "https://developers.google.com/drive/v2/reference/" },
                        { Name: "Chromium Embedded Framework", Url: "https://bitbucket.org/chromiumembedded/cef" }
                    ]
                },
                {
                    Name: "DPS",
                    Description: this.localizations.Get("digic-project-DPS-description"),
                    Tags: [
                        { Name: "ASP.NET", Url: "https://www.asp.net/" },
                        { Name: "Web API", Url: "https://www.asp.net/web-api" },
                        { Name: "Entity Framework", Url: "https://www.asp.net/entity-framework" },
                        { Name: "OData V4", Url: "http://www.odata.org/" },
                        { Name: "SignalR", Url: "https://www.asp.net/signalr" },
                        { Name: "Typescript", Url: "https://www.typescriptlang.org/" },
                        { Name: "Angular2", Url: "https://angularjs.org/" },
                        { Name: "Angular Material", Url: "https://material.angular.io/" },
                        { Name: "SASS", Url: "http://sass-lang.com/" },
                    ]
                },
                {
                    Name: "TER",
                    Description: this.localizations.Get("digic-project-TER-description"),
                    Tags: [
                        { Name: "ASP.NET", Url: "https://www.asp.net/" },
                        { Name: "Web API", Url: "https://www.asp.net/web-api" },
                        { Name: "Entity Framework", Url: "https://www.asp.net/entity-framework" },
                        { Name: "OData V4", Url: "http://www.odata.org/" },
                        { Name: "Typescript", Url: "https://www.typescriptlang.org/" },
                        { Name: "Aurelia", Url: "http://aurelia.io/" },
                        { Name: "Aurelia Materialize Bridge", Url: "https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge" },
                        { Name: "SASS", Url: "http://sass-lang.com/" },
                    ]
                }
            ],
            Responsibilities: this.localizations.Get("job-digic-responsibilities")
        };

        let jobSenseNet: Job = {
            Employer: {
                Name: "Sense/NET",
                Description: this.localizations.Get("employer-sensenet-description"),
                HomePage: "http://sensenet.com",
                LogoUrl: "/assets/sensenet-logo.png"
            },
            Title: "Frontend developer",
            FromDate: new Date("2014-05-01"),
            UntilDate: new Date("2015-10-01"),
            Address: "1117 Budapest, Infopark sétány 1",
            LocationQuery: "Budapest,+Infopark+stny.+1,+1117",
            Projects: [],
            Responsibilities: this.localizations.Get("job-sensenet-responsibilities"),
            Tags: [
                { Name: "Sense/NET API", Url: "http://www.sensenet.com/" },
                { Name: "ASP.NET MVC", Url: "http://www.asp.net/mvc" },
                { Name: "Lucene.NET", Url: "https://lucenenet.apache.org/" },
                { Name: "OData", Url: "http://www.odata.org/" },
                { Name: "SignalR", Url: "https://www.asp.net/signalr" },
                { Name: "Kendo UI", Url: "http://www.telerik.com/kendo-ui" }
            ],
        }

        let jobTesco: Job = {
            Employer: {
                Name: "Tesco Stores Ltd. / PartnerSys ZRt.",
                Description: "",
                HomePage: "http://tesco.hu",
                LogoUrl: "/assets/tesco-logo.png"
            },
            FromDate: new Date("2010-09-01"),
            UntilDate: new Date("2014-05-01"),
            Address: "Budaörs, Kinizsi ut 1, 2040",
            LocationQuery: "Budaörs,+Kinizsi+út+1,+2040",
            Projects: [
                {
                    Name: "IT Requests",
                    Description: this.localizations.Get("tesco-project-itr-description"),
                    Tags: [
                        { Name: "PHP", Url: "https://secure.php.net/" },
                        { Name: "MySQL", Url: "https://www.mysql.com/" },
                        { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                        { Name: "Active Directory", Url: "https://en.wikipedia.org/wiki/Active_Directory" },
                        { Name: "Microsoft Exchange", Url: "https://en.wikipedia.org/wiki/Microsoft_Exchange_Server" },                        
                    ]
                },
                {
                    Name: "PhoneCosts",
                    Description: this.localizations.Get("tesco-project-phone-description"),
                    Tags: [
                        { Name: "ASP.NET MVC", Url: "http://www.asp.net/mvc" },
                        { Name: "Entity Framework", Url: "https://www.asp.net/entity-framework" },
                        { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                    ]
                },
                {
                    Name: "PoolCars",
                    Description: this.localizations.Get("tesco-project-phone-description"),
                    Tags: [
                        { Name: "ASP.NET MVC", Url: "http://www.asp.net/mvc" },
                        { Name: "Entity Framework", Url: "https://www.asp.net/entity-framework" },
                        { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                    ]
                }                            
            ],
            Responsibilities: this.localizations.Get("job-tesco-responsibilities"),
            Tags: [],
            Title: "IT Support specialist / User Admin / Web developer"
        }
        return [jobDigic, jobSenseNet, jobTesco];
    }
}
import { LocalizedString } from '../models/types';
import { Language } from '../models/language';
import { LocalizationService } from './localizationservice';
import { Job } from '../models/job';
import { autoinject } from 'aurelia-framework';

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
                LogoUrl: "http://"
            },
            From: new Date("2015-10-00"),
            Until: null,
            JobTitle: this.localizations.Get("job-digic-title"),
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
                }
            ],
            Responsibilities: this.localizations.Get("job-digic-responsibilities")
        };

        return [jobDigic];
    }
}
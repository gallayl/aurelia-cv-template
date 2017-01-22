import { LocalizedKeyValuePair, LocalizedString } from '../models/types';
import { LocalizationLanguage as Language } from '../models/enums';

import { LocalizedResource } from '../models/localizedresource';

export class LocalizationService {

    private static LocalStorageKey = "CvTemplate.Localization";

    private static NoLocalization(key: string): LocalizedResource {
        let noLoc: LocalizedResource = {
            Key: "NoLocalization",
            Values: [
                [Language.English, `!!No localization available for key "${key}" !!`],
                [Language.Hungarian, `!!Nincs elérhető fordítás a "${key}" kulcshoz!!`]
            ]
        }
        return noLoc;
    }

    constructor() { }


    private _currentLanguage: Language;
    public get currentLanguage(): Language {
        // already read
        if (this._currentLanguage)
            return this._currentLanguage;

        //from local storage
        let fromLocalStorage: Language = Language[localStorage.getItem(LocalizationService.LocalStorageKey)];
        if (localStorage.getItem(LocalizationService.LocalStorageKey)) {
            this._currentLanguage = fromLocalStorage;
            return fromLocalStorage;
        }
        //from browser preference
        let fromBrowser: Language = navigator.language.indexOf("hu") === 0 ? Language.Hungarian : Language.English;
        this._currentLanguage = fromBrowser;

    }
    public set currentLanguage(v: Language) {
        localStorage.setItem(LocalizationService.LocalStorageKey, Language[v]);
        this._currentLanguage = v;
    }

    public static Localizations: LocalizedResource[] = [
        {
            Key: "date-now",
            Values: [
                [Language.English, "now"],
                [Language.Hungarian, "jelenleg"]
            ]
        },        
        {
            Key: "cv-title",
            Values: [
                [Language.English, "CV"],
                [Language.Hungarian, "Önéletrajz"]
            ]
        },
        {
            Key: "owner-title",
            Values: [
                [Language.English, "Software Developer"],
                [Language.Hungarian, "Fejlesztő"]
            ]
        },
        {
            Key: "schools-title",
            Values: [
                [Language.English, "Schools and education"],
                [Language.Hungarian, "Oktatás, tanulmányok"]
            ]
        },
        {
            Key: "school-vocational-generic",
            Values: [
                [Language.English, "Vocational"],
                [Language.Hungarian, "Érettségi"]
            ]
        },        
        {
            Key: "school-okj-general-programming",
            Values: [
                [Language.English, "General programming - NQR"],
                [Language.Hungarian, "Általános programozó - OKJ"]
            ]
        },
        {
            Key: "school-web-development",
            Values: [
                [Language.English, "WEB Development - NQR"],
                [Language.Hungarian, "WEB Fejlesztő - OKJ"]
            ]
        },
        {
            Key: "button-close",
            Values: [
                [Language.English, "Close"],
                [Language.Hungarian, "Bezár"]
            ]
        },
        {
            Key: "jobs-title",
            Values: [
                [Language.English, "Career"],
                [Language.Hungarian, "Munkatapasztalatok"]
            ]
        },
        {
            Key: "job-digic-responsibilities",
            Values: [
                [Language.English, "Developing and testing of an in-house production-management application using ASP.NET, Entity Framework, OData, Angular2 / Aurelia.IO and WebPack. Set up and maintain Continuous Delivery solutions with Team Foundation Server. Developing small individual systems."],
                [Language.Hungarian, "A cég saját fejlesztésű gyártásirányítási szoftverének a fejlesztése és tesztelése ASP.NET, Entity Framework, OData, Angular2 / Aurelia.IO és WebPack alapokon, kisebb szigetrendszerek fejlesztése"]
            ]
        },
        {
            Key: "digic-project-dProject-description",
            Values: [
                [Language.English, "The in-house production management software of Digic, used for almost every area in the company including task management, communication, HR processes and distributed rendering task management."],
                [Language.Hungarian, "A Digic saját fejlesztésű gyártásirányítási szoftvere, a vállalat szinte összes területét érinti, ide értve a belső feladatkezelést, kommunikációt, HR folyamatokat és a renderek kiosztását."]
            ]
        },
        {
            Key: "digic-project-DPS-description",
            Values: [
                [Language.English, "DPS(dProject Services) has been started as a public in-house RESTful API for dProject, now it has an Angular2-based modern frontend UI aswell."],
                [Language.Hungarian, "A DPS(dProject Services) egy publikus REST API-ként indult, jelenleg rendelkezik egy modernebb frontend-el is Angular2 alapokon."]
            ]
        },
        {
            Key: "digic-project-TER-description",
            Values: [
                [Language.English, "A TER (Teljesítmény Értékelési Rendszer) a vállalat belső fejlesztésű, egyedi folyamatokra épülő teljesítmény értékelési rendszere."],
                [Language.Hungarian, "The TER (Performance Review System) is the company's own employee rating system."]
            ]
        },        
        {
            Key: "job-gyk-description-title",
            Values: [
                [Language.English, "Media watching, administrative tasks, system maintenance, supporting of the implementation of a new processes, communicating with the customers, team leadership"],
                [Language.Hungarian, "Médiafigyelés, adminisztrációs feladatok, rendszerkarbantartás, új folyamatok bevezetésének támogatása, ügyfelekkel való napi kapcsolattartás, csoportvezetés"]
            ]
        },
        {
            Key: "job-gyk-description-title",
            Values: [
                [Language.English, "Media watching, administrative tasks, system maintenance, supporting of the implementation of a new processes, communicating with the customers, team leadership"],
                [Language.Hungarian, "Médiafigyelés, adminisztrációs feladatok, rendszerkarbantartás, új folyamatok bevezetésének támogatása, ügyfelekkel való napi kapcsolattartás, csoportvezetés"]
            ]
        }
    ];


    public Get(key: string): LocalizedString {
        
        let found : LocalizedResource = LocalizationService.Localizations.find(loc => {
            return loc.Key === key;
        }) || LocalizationService.NoLocalization(key);

        let localizedValue = found.Values.find(val=>{
            return val[0] === this.currentLanguage;
        });

        return localizedValue[1];
    }
}
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
            Key: "print",
            Values: [
                [Language.English, "Print"],
                [Language.Hungarian, "Nyomtatás"]
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
            Key: "school-vocational-generic, school-okj-general-programming",
            Values: [
                [Language.English, "Vocational, General programming - NQR"],
                [Language.Hungarian, "Érettségi, Általános programozó - OKJ"]
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
            Key: "school-ms70-480",
            Values: [
                [Language.English, "Programming in HTML5 with JavaScript and CSS3"],
                [Language.Hungarian, "HTML5, JavaScript és CSS3 fejlesztés"]
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
                [Language.Hungarian, "A cég saját fejlesztésű gyártásirányítási szoftverének a fejlesztése és tesztelése ASP.NET, Entity Framework, OData, Angular2 / Aurelia.IO és WebPack alapokon, kisebb különálló webalkalmazások fejlesztése"]
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
            Key: "job-sensenet-responsibilities",
            Values: [
                [Language.English, "Developing an Enterprise Content Management with online document viewer feature, bulk import / export features with high scalability"],
                [Language.Hungarian, "Nagyvállalati tartalomkezelő szoftver fejlesztése, online dokumentum előnézetek, tömeges import / export funkciókkal"]
            ]
        },
        {
            Key: "job-tesco-responsibilities",
            Values: [
                [Language.English, "Managing user accesses for all the systems, participating in integrating new systems and solutions to the company workflow. Created command line tools for IT Support (AD management and reporting, bulk user management, etc...). Developed some independent web applications for managing business processes using"],
                [Language.Hungarian, "A felhasználók hozzáféréseinek kezelése az összes vállalati rendszerhez, részvétel az új rendszerek és IT megoldások bevezetésében és a vállalati folyamatokba való beillesztésében. Konzolos tool-ok fejlesztése az IT Support csapat részére (riportálás, bulk műveletek, stb...). Webes alkalmazások fejlesztése belső folyamatok kiszolgálására."]
            ]
        },
        {
            Key: "tesco-project-itr-description",
            Values: [
                [Language.English, "This web application is for managing all of the (beforehand paper-based) IT Requests from the submitting to the closure. It includes a PC Device inventory and a training journal (which is a prerequisite for some application request), the data fields and the workflow phases can change dynamically. It also includes an interface to the HR systems for automatic approver calculation."],
                [Language.Hungarian, "A szoftver a PC Support részére korábban papír- illetve e-mail alapon beérkezett eszköz- és hozzáférés igényeket ülteti át elektronikus formába. A szoftver képes több adatforrásból szinkronizálni a dolgozói adatokat illetve a hierarchiát, az igénylésekhez szükséges adatok, illetve a jóváhagyási lánc az adminisztrátorok által dinamikusan szerkeszthetőek, illetve a szoftver tárolja a különböző eszköz- és vizsgaadatokat is."]
            ]
        },
        {
            Key: "tesco-project-phone-description",
            Values: [
                [Language.English, "With this software, the private and company calls are separable and accountable. It includes a corporate phonebook and helps to administrate the device handovers and takeover."],
                [Language.Hungarian, "A szoftver segítségével a vállalat dolgozói hozzáférhetnek a vállalati telefonkönyvhöz, nyilvántarthatják a telefonköltségeiket, valamint vállalati szinten kimutathatóak az egyes területek telefonköltségei."]
            ]
        },
        {
            Key: "tesco-project-poolcars-description",
            Values: [
                [Language.English, "The application was developed to manage the company’s pool car reservation processes for the Fleet Management Department"],
                [Language.Hungarian, "A webalkalmazás a vállalati kulcsosautó-foglalási folyamatokat és az ezzel járó adminisztratív teendőket segíti a Flottakezelési osztály számára."]
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
        },
        {
            Key: "skills-title",
            Values: [
                [Language.English, "Skills"],
                [Language.Hungarian, "Ismeretek"]
            ]
        },
        {
            Key: "languages-title",
            Values: [
                [Language.English, "Languages"],
                [Language.Hungarian, "Nyelvismeret"]
            ]
        },
        {
            Key: "language-hungarian",
            Values: [
                [Language.English, "Hungarian"],
                [Language.Hungarian, "Magyar"]
            ]
        },
        {
            Key: "language-english",
            Values: [
                [Language.English, "English"],
                [Language.Hungarian, "Angol"]
            ]
        },
        {
            Key: "language-german",
            Values: [
                [Language.English, "German"],
                [Language.Hungarian, "Német"]
            ]
        },
        {
            Key: "language-skill-Elementary",
            Values: [
                [Language.English, "Elementary"],
                [Language.Hungarian, "Alapszintű"]
            ]
        },
        {
            Key: "language-skill-Limited",
            Values: [
                [Language.English, "Limited"],
                [Language.Hungarian, "Korlátozott"]
            ]
        },
        {
            Key: "language-skill-Professional",
            Values: [
                [Language.English, "Professional"],
                [Language.Hungarian, "Szakmai"]
            ]
        },
        {
            Key: "language-skill-Native",
            Values: [
                [Language.English, "Native"],
                [Language.Hungarian, "Anyanyelvi szint"]
            ]
        },
        {
            Key: "skill-programming languages",
            Values: [
                [Language.English, "Programming languages"],
                [Language.Hungarian, "Programnyelvek"]
            ]
        },
        {
            Key: "skill-frameworks-and-libraries",
            Values: [
                [Language.English, "Frameworks and libraries"],
                [Language.Hungarian, "Keretrendszerek, programkönyvtárak"]
            ]
        },
        {
            Key: "skill-productivity-tools",
            Values: [
                [Language.English, "Other utilities, debug- and productivity tools"],
                [Language.Hungarian, "Egyéb, debug produktivitásnövelő eszközök"]
            ]
        },
        {
            Key: "skill-version-control-name",
            Values: [
                [Language.English, "Version control systems"],
                [Language.Hungarian, "Verziókövető rendszerek"]
            ]
        },
        {
            Key: "skill-integrated-development-environment",
            Values: [
                [Language.English, "Integrated Development Environments"],
                [Language.Hungarian, "Feljesztői környezetek"]
            ]
        },
    ];

    public Get(key: string): LocalizedString {

        let found: LocalizedResource = LocalizationService.Localizations.find(loc => {
            return loc.Key === key;
        }) || LocalizationService.NoLocalization(key);

        let localizedValue = found.Values.find(val => {
            return val[0] === this.currentLanguage;
        });

        return localizedValue[1];
    }
}
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
                [Language.English, "Schools"],
                [Language.Hungarian, "Tanulmányok"]
            ]
        },        
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
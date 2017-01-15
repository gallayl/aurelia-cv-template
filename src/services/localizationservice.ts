import { LocalizationLanguage as Language } from '../models/enums';

import { LocalizedResource } from '../models/localizedresource';

export class LocalizationService {

    private LocalizationData: LocalizedResource[] = [
        {
            Key: "CvTitle",
            Values: [
                [Language.English, "Curricum Vitale"]
                [Language.Hungarian, "Önéletrajz"]
            ]
        }
    ];


    public GetLocalization(key, LocalizationLanguate): LocalizedResource {
        return {
            Key: key,
            Values: [
                [Language.English, "alma"]
            ]
        }
    }
}
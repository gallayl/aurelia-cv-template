define('models/enums',["require", "exports"], function (require, exports) {
    "use strict";
    var LanguageSkill;
    (function (LanguageSkill) {
        LanguageSkill[LanguageSkill["Elementary"] = 0] = "Elementary";
        LanguageSkill[LanguageSkill["Limited"] = 1] = "Limited";
        LanguageSkill[LanguageSkill["Professional"] = 2] = "Professional";
        LanguageSkill[LanguageSkill["Native"] = 3] = "Native";
    })(LanguageSkill = exports.LanguageSkill || (exports.LanguageSkill = {}));
    var LocalizationLanguage;
    (function (LocalizationLanguage) {
        LocalizationLanguage[LocalizationLanguage["English"] = 0] = "English";
        LocalizationLanguage[LocalizationLanguage["Hungarian"] = 1] = "Hungarian";
    })(LocalizationLanguage = exports.LocalizationLanguage || (exports.LocalizationLanguage = {}));
});

define('models/types',["require", "exports"], function (require, exports) {
    "use strict";
});

define('models/localizedresource',["require", "exports"], function (require, exports) {
    "use strict";
    var LocalizedResource = (function () {
        function LocalizedResource() {
        }
        return LocalizedResource;
    }());
    exports.LocalizedResource = LocalizedResource;
});

define('services/localizationservice',["require", "exports", "../models/enums"], function (require, exports, enums_1) {
    "use strict";
    var LocalizationService = (function () {
        function LocalizationService() {
        }
        LocalizationService.NoLocalization = function (key) {
            var noLoc = {
                Key: "NoLocalization",
                Values: [
                    [enums_1.LocalizationLanguage.English, "!!No localization available for key \"" + key + "\" !!"],
                    [enums_1.LocalizationLanguage.Hungarian, "!!Nincs el\u00E9rhet\u0151 ford\u00EDt\u00E1s a \"" + key + "\" kulcshoz!!"]
                ]
            };
            return noLoc;
        };
        Object.defineProperty(LocalizationService.prototype, "currentLanguage", {
            get: function () {
                if (this._currentLanguage)
                    return this._currentLanguage;
                var fromLocalStorage = enums_1.LocalizationLanguage[localStorage.getItem(LocalizationService.LocalStorageKey)];
                if (localStorage.getItem(LocalizationService.LocalStorageKey)) {
                    this._currentLanguage = fromLocalStorage;
                    return fromLocalStorage;
                }
                var fromBrowser = navigator.language.indexOf("hu") === 0 ? enums_1.LocalizationLanguage.Hungarian : enums_1.LocalizationLanguage.English;
                this._currentLanguage = fromBrowser;
            },
            set: function (v) {
                localStorage.setItem(LocalizationService.LocalStorageKey, enums_1.LocalizationLanguage[v]);
                this._currentLanguage = v;
            },
            enumerable: true,
            configurable: true
        });
        LocalizationService.prototype.Get = function (key) {
            var _this = this;
            var found = LocalizationService.Localizations.find(function (loc) {
                return loc.Key === key;
            }) || LocalizationService.NoLocalization(key);
            var localizedValue = found.Values.find(function (val) {
                return val[0] === _this.currentLanguage;
            });
            return localizedValue[1];
        };
        return LocalizationService;
    }());
    LocalizationService.LocalStorageKey = "CvTemplate.Localization";
    LocalizationService.Localizations = [
        {
            Key: "cv-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "CV"],
                [enums_1.LocalizationLanguage.Hungarian, "Önéletrajz"]
            ]
        }
    ];
    exports.LocalizationService = LocalizationService;
});

define('models/language',["require", "exports"], function (require, exports) {
    "use strict";
    var Language = (function () {
        function Language() {
        }
        return Language;
    }());
    exports.Language = Language;
});

define('models/tag',["require", "exports"], function (require, exports) {
    "use strict";
    var Tag = (function () {
        function Tag() {
        }
        return Tag;
    }());
    exports.Tag = Tag;
});

define('models/project',["require", "exports"], function (require, exports) {
    "use strict";
    var Project = (function () {
        function Project() {
        }
        return Project;
    }());
    exports.Project = Project;
});

define('models/employer',["require", "exports"], function (require, exports) {
    "use strict";
    var Employer = (function () {
        function Employer() {
        }
        return Employer;
    }());
    exports.Employer = Employer;
});

define('models/job',["require", "exports"], function (require, exports) {
    "use strict";
    var Job = (function () {
        function Job() {
        }
        return Job;
    }());
    exports.Job = Job;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('services/jobservice',["require", "exports", "./localizationservice", "aurelia-framework"], function (require, exports, localizationservice_1, aurelia_framework_1) {
    "use strict";
    var JobService = (function () {
        function JobService(localizations) {
            this.localizations = localizations;
        }
        JobService.prototype.GetJobs = function () {
            var jobDigic = {
                Employer: {
                    Name: "Digic Pictures",
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
        };
        return JobService;
    }());
    JobService = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [localizationservice_1.LocalizationService])
    ], JobService);
    exports.JobService = JobService;
});

define('models/hobby',["require", "exports"], function (require, exports) {
    "use strict";
    var Hobby = (function () {
        function Hobby() {
        }
        return Hobby;
    }());
    exports.Hobby = Hobby;
});

define('models/school',["require", "exports"], function (require, exports) {
    "use strict";
    var School = (function () {
        function School() {
        }
        return School;
    }());
    exports.School = School;
});

define('models/owner',["require", "exports"], function (require, exports) {
    "use strict";
    var Owner = (function () {
        function Owner() {
        }
        return Owner;
    }());
    exports.Owner = Owner;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('services/ownerservice',["require", "exports", "./jobservice", "./localizationservice", "aurelia-framework"], function (require, exports, jobservice_1, localizationservice_1, aurelia_framework_1) {
    "use strict";
    var OwnerService = (function () {
        function OwnerService(localizations, jobs) {
            this.localizations = localizations;
            this.jobs = jobs;
        }
        OwnerService.prototype.GetOwner = function () {
            return {
                Name: "Gallay Lajos",
                Address: "1144 Budapest, Rákosfalva park 4.",
                Email: "gallay.lajos@gmail.com",
                Summary: this.localizations.Get(""),
                BirthDate: new Date("1985-09-25"),
                BirthPlace: "Budapest, Hungary",
                Hobbies: [],
                Jobs: this.jobs.GetJobs(),
                Phone: "+36 20 530 7414",
                PhotoURL: "./assets/lalo.jpg",
                Projects: [],
                Schools: []
            };
        };
        return OwnerService;
    }());
    OwnerService = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [localizationservice_1.LocalizationService, jobservice_1.JobService])
    ], OwnerService);
    exports.OwnerService = OwnerService;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "./services/localizationservice", "./services/ownerservice", "aurelia-framework"], function (require, exports, localizationservice_1, ownerservice_1, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App(owner, localize) {
            this.owner = owner;
            this.localize = localize;
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = this.localize.Get('cv-title');
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home/home', title: "" + this.owner.GetOwner().Name }
            ]);
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [ownerservice_1.OwnerService, localizationservice_1.LocalizationService])
    ], App);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.use.plugin('aurelia-materialize-bridge', function (b) { return b.useAll(); });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/home',["require", "exports", "../services/localizationservice", "../services/ownerservice", "aurelia-framework"], function (require, exports, localizationservice_1, ownerservice_1, aurelia_framework_1) {
    "use strict";
    var Home = (function () {
        function Home(owner, localization) {
            this.owner = owner;
            this.localization = localization;
            this.Owner = owner.GetOwner();
        }
        return Home;
    }());
    Home = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [ownerservice_1.OwnerService, localizationservice_1.LocalizationService])
    ], Home);
    exports.Home = Home;
});

define('models/certification',["require", "exports"], function (require, exports) {
    "use strict";
    var Certification = (function () {
        function Certification() {
        }
        return Certification;
    }());
    exports.Certification = Certification;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/cv-header',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var CvHeader = (function () {
        function CvHeader() {
        }
        CvHeader.prototype.TitleChanged = function (newValue, oldValue) {
        };
        CvHeader.prototype.SubTitleChanged = function (newValue, oldValue) {
        };
        return CvHeader;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], CvHeader.prototype, "Title", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], CvHeader.prototype, "SubTitle", void 0);
    exports.CvHeader = CvHeader;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./scss/reset.css\"></require>\n  <require from=\"materialize-css/css/materialize.css\"></require>\n  <router-view></router-view>\n</template>\n"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from = \"../resources/elements/cv-header\"></require>\r\n    <cv-header title.bind=\"Owner.Name\" sub-title.bind=\"localization.Get('cv-title')\" ></cv-header>\r\n</template>"; });
define('text!scss/reset.css', ['module'], function(module) { module.exports = "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0b1 | 201101 \r\n   NOTE: WORK IN PROGRESS\r\n   USE WITH CAUTION AND TEST WITH ABANDON */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\n/* remember to define visible focus styles! \r\n:focus {\r\n\toutline: ?????;\r\n} */\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none; }\n\ndel {\n  text-decoration: line-through; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n"; });
define('text!resources/elements/cv-header.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/cv-header.html', ['module'], function(module) { module.exports = "<template>\n  <md-navbar class=\"header-container\">\n    <require from=\"./cv-header.css\"></require>\n    <!--<h1>${Title}</h1>\n\n    <h2>${SubTitle}</h2>-->\n  </md-navbar>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map
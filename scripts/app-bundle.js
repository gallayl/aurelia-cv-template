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
        },
        {
            Key: "owner-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Software Developer"],
                [enums_1.LocalizationLanguage.Hungarian, "Fejlesztő"]
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
                Title: this.localizations.Get('owner-title'),
                Address: "1144 Budapest, Rákosfalva park 4.",
                Email: "gallay.lajos@gmail.com",
                Summary: this.localizations.Get(""),
                BirthDate: new Date("1985-09-25"),
                BirthPlace: "Budapest, Hungary",
                Hobbies: [],
                Jobs: this.jobs.GetJobs(),
                Phone: "+36 20 530 7414",
                PhotoURL: "/assets/lalo.jpg",
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
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], CvHeader.prototype, "Image", void 0);
    exports.CvHeader = CvHeader;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./scss/reset.css\"></require>\n  <require from=\"materialize-css/css/materialize.css\"></require>\n  <md-colors md-primary-color=\"green\" md-accent-color=\"blue\"></md-colors>\n\n  <router-view></router-view>\n</template>\n"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"../resources/elements/cv-header\"></require>\r\n    <require from=\"./home.css\"></require>\r\n    <cv-header title.bind=\"Owner.Name\" sub-title.bind=\"Owner.Title\", image.bind=\"Owner.PhotoURL\"></cv-header>\r\n    <div class=\"main-content\">\r\n        <md-card id=\"lipsum\">\r\n            <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sodales ligula. In in augue vel tortor tristique faucibus\r\n                vel at orci. Quisque eleifend maximus libero vel consectetur. In tincidunt id est vel porta. Vestibulum tempor\r\n                odio eu nibh maximus luctus. Donec nulla ligula, dignissim quis facilisis at, luctus sit amet dui. Nunc sit\r\n                amet justo ac orci semper interdum vel nec sem. Nulla neque purus, elementum eu neque eu, aliquam auctor\r\n                ipsum. Nullam vitae orci eu lectus maximus gravida nec vel velit. Aenean suscipit turpis non diam dictum\r\n                varius. Proin erat eros, malesuada a mollis et, gravida nec turpis. Sed hendrerit bibendum magna non pharetra.\r\n                Vivamus sapien lectus, blandit ac ornare ac, lacinia vel nisl. Mauris efficitur tellus nec nisl interdum\r\n                lobortis. Integer vel arcu et elit efficitur imperdiet id eget lectus. Nullam faucibus lorem at sollicitudin\r\n                tempor.\r\n            </p>\r\n            <p>\r\n                Mauris congue, lorem et mattis eleifend, nisi mi venenatis purus, eget sollicitudin leo est id nisl. Aliquam feugiat semper\r\n                est sed feugiat. Curabitur sapien nulla, mollis sit amet lacinia et, auctor tristique lacus. Ut orci mi,\r\n                consequat eget arcu eu, viverra ullamcorper turpis. Aenean at ultricies neque. Duis bibendum sodales pulvinar.\r\n                Pellentesque vehicula egestas nibh et mattis. Donec vitae diam feugiat, condimentum nisi nec, feugiat arcu.\r\n                Pellentesque ultricies mauris eget ex feugiat, eget mollis ipsum auctor. Fusce lacinia et magna ac molestie.\r\n            </p>\r\n            <p>\r\n                Vestibulum ac est ut est sodales placerat. Duis urna libero, tincidunt a tincidunt eu, vulputate vel lectus. Nunc facilisis\r\n                dolor lorem, ac vulputate est dictum a. Cras sollicitudin venenatis lacinia. Integer facilisis tortor nec\r\n                mi tempor vehicula. Phasellus vestibulum eros id orci vestibulum, sed laoreet nisl tincidunt. Vivamus rutrum\r\n                egestas dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r\n                Praesent facilisis magna placerat ipsum rutrum accumsan. Ut ut maximus orci. Cras et diam varius nunc rutrum\r\n                volutpat. Aenean a risus non orci auctor vulputate viverra vel odio. Donec id pulvinar erat, sed tempus eros.\r\n                Nulla facilisi.\r\n            </p>\r\n            <p>\r\n                Aenean vulputate sollicitudin velit, non aliquam arcu dignissim non. Mauris viverra, magna eu euismod ullamcorper, tellus\r\n                nibh malesuada felis, et fringilla metus tellus et nulla. Donec id tortor at tellus placerat maximus ac non\r\n                ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum\r\n                et malesuada fames ac ante ipsum primis in faucibus. Fusce vitae placerat arcu. Aenean ornare, enim laoreet\r\n                aliquet fringilla, ipsum eros pretium ligula, quis interdum lectus massa in nibh. Nulla justo risus, sollicitudin\r\n                quis ipsum et, euismod lobortis sem. Ut et est non libero fermentum venenatis in vitae felis. Donec blandit\r\n                tellus nec nunc tincidunt, at dignissim orci porta. Praesent eget semper nisl. Vestibulum ultricies non lectus\r\n                vel viverra. Donec non sollicitudin risus.\r\n            </p>\r\n            <p>\r\n                Morbi sagittis ex vel metus dignissim vehicula sed vitae mauris. Duis condimentum ligula diam, eget pharetra enim mattis\r\n                id. Curabitur a ultricies tellus. Duis vestibulum, nisl nec hendrerit dictum, ante purus venenatis quam,\r\n                id gravida orci nibh vel nisi. Sed interdum, diam sed tempor iaculis, velit arcu ultrices sapien, sit amet\r\n                mattis justo felis sit amet justo. Integer elementum porta massa. Sed in laoreet nibh.\r\n            </p>\r\n        </md-card>\r\n    </div>\r\n</template>"; });
define('text!home/home.css', ['module'], function(module) { module.exports = ".main-content {\n  padding: 0 15px; }\n"; });
define('text!resources/elements/cv-header.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./cv-header.css\"></require>\n  <md-navbar class=\"header-container\">\n    <div class=\"header-inner\">\n      <div class=\"head-left\">\n        <span class=\"title\">${Title}</span>\n        <span class=\"subtitle\">${SubTitle}</span>\n        <div class=\"socialLinks\">\n          <a md-button=\"floating: true;\" md-waver=\"color: primary; circle: true;\" href=\"mailto:${ContactMail}\">\n            <i class=\"large material-icons\">email</i>\n          </a>\n          <a md-button=\"floating: true;\" md-waver=\"color: primary; circle: true;\">\n            <i class=\"large material-icons\">phone</i>\n          </a>\n        </div>\n      </div>\n      <div class=\"head-center\"></div>\n      <div class=\"head-right\">\n        <img src=\"${Image}\" alt=\"User\" />\n      </div>\n    </div>\n  </md-navbar>\n</template>"; });
define('text!scss/reset.css', ['module'], function(module) { module.exports = "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0b1 | 201101 \r\n   NOTE: WORK IN PROGRESS\r\n   USE WITH CAUTION AND TEST WITH ABANDON */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\n/* remember to define visible focus styles! \r\n:focus {\r\n\toutline: ?????;\r\n} */\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none; }\n\ndel {\n  text-decoration: line-through; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml, body {\n  height: 100%;\n  background-color: whitesmoke; }\n"; });
define('text!resources/elements/cv-header.css', ['module'], function(module) { module.exports = "md-navbar nav {\n  height: 200px;\n  background-image: url(\"/assets/bg-head.jpg\");\n  background-position: center;\n  background-size: 100%; }\n\nmd-navbar .header-inner {\n  display: flex;\n  flex-direction: row; }\n  md-navbar .header-inner .head-center {\n    flex-grow: 1; }\n  md-navbar .header-inner .head-left {\n    display: block;\n    text-shadow: 1px 1px 15px black, 1px 1px 25px black, 1px 1px 35px black; }\n    md-navbar .header-inner .head-left .subtitle,\n    md-navbar .header-inner .head-left .title {\n      padding-left: 25px;\n      display: inline-block;\n      width: 100%;\n      text-align: left;\n      line-height: normal; }\n    md-navbar .header-inner .head-left .title {\n      font-size: 1.8em;\n      padding-top: 25px; }\n    md-navbar .header-inner .head-left .socialLinks {\n      margin-left: 25px; }\n      md-navbar .header-inner .head-left .socialLinks a {\n        margin-right: 0 5px; }\n        md-navbar .header-inner .head-left .socialLinks a i {\n          line-height: inherit; }\n  md-navbar .header-inner .head-right {\n    margin-right: 25px;\n    margin-top: 25px;\n    border-radius: 50%;\n    overflow: hidden;\n    width: 150px;\n    height: 150px;\n    box-shadow: 0 0 12px 5px black; }\n    md-navbar .header-inner .head-right:active {\n      box-shadow: 0 0 5px 3px black; }\n    md-navbar .header-inner .head-right img {\n      width: 100%;\n      height: 100%; }\n"; });
//# sourceMappingURL=app-bundle.js.map
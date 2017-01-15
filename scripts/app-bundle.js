define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
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

define('models/localizedresource',["require", "exports"], function (require, exports) {
    "use strict";
    var LocalizedResource = (function () {
        function LocalizedResource() {
        }
        return LocalizedResource;
    }());
    exports.LocalizedResource = LocalizedResource;
});

define('models/types',["require", "exports"], function (require, exports) {
    "use strict";
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

define('models/certification',["require", "exports"], function (require, exports) {
    "use strict";
    var Certification = (function () {
        function Certification() {
        }
        return Certification;
    }());
    exports.Certification = Certification;
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

define('models/hobby',["require", "exports"], function (require, exports) {
    "use strict";
    var Hobby = (function () {
        function Hobby() {
        }
        return Hobby;
    }());
    exports.Hobby = Hobby;
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

define('models/job',["require", "exports"], function (require, exports) {
    "use strict";
    var Job = (function () {
        function Job() {
        }
        return Job;
    }());
    exports.Job = Job;
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
define('services/jobservice',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var JobService = (function () {
        function JobService() {
        }
        JobService.prototype.GetJobs = function () {
            return [
                {
                    Employer: {
                        Name: "Digic Pictures",
                        Description: "dest",
                        HomePage: "http://digicpictures.com",
                        LogoUrl: "http://"
                    },
                    From: new Date("2015-10-00"),
                    Until: null,
                    JobTitle: "Production developer / Senior developer",
                    Projects: [],
                    Responsibilities: ""
                }
            ];
        };
        return JobService;
    }());
    JobService = __decorate([
        aurelia_framework_1.autoinject
    ], JobService);
    exports.JobService = JobService;
});

define('services/localizationservice',["require", "exports", "../models/enums"], function (require, exports, enums_1) {
    "use strict";
    var LocalizationService = (function () {
        function LocalizationService() {
            this.LocalizationData = [
                {
                    Key: "CvTitle",
                    Values: [
                        [enums_1.LocalizationLanguage.English, "Curricum Vitale"][enums_1.LocalizationLanguage.Hungarian, "Önéletrajz"]
                    ]
                }
            ];
        }
        LocalizationService.prototype.GetLocalization = function (key, LocalizationLanguate) {
            return {
                Key: key,
                Values: [
                    [enums_1.LocalizationLanguage.English, "alma"]
                ]
            };
        };
        return LocalizationService;
    }());
    exports.LocalizationService = LocalizationService;
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
define('services/ownerservice',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var OwnerService = (function () {
        function OwnerService() {
        }
        OwnerService.prototype.GetOwner = function () {
        };
        return OwnerService;
    }());
    OwnerService = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [])
    ], OwnerService);
    exports.OwnerService = OwnerService;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${message}</h1>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map
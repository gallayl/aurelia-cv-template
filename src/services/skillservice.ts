import { Skill } from '../models/skill';
export class SkillService {

    public Get(): Skill[] {
        return [
            {
                Name: "skill-programming languages",
                Tags: [
                    { Name: "C#", Url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
                    { Name: "TypeScript", Url: "https://typescriptlang.com/" },
                    { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                    { Name: "CSS", Url: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets" },
                    { Name: "SASS", Url: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" },
                    { Name: "HTML5", Url: "https://en.wikipedia.org/wiki/HTML5" },
                    { Name: "JADE", Url: "http://learnjade.com/" },
                    { Name: "SQL", Url: "https://en.wikipedia.org/wiki/SQL" },
                ]
            },
            {
                Name: "skill-frameworks-and-libraries",
                Tags: [
                    { Name: ".NET", Url: "https://www.microsoft.com/net" },
                    { Name: "MVC", Url: "https://www.asp.net/mvc/mvc4" },
                    { Name: "Web API", Url: "https://www.asp.net/web-api" },
                    { Name: "Entity Framework", Url: "https://www.asp.net/entity-framework" },
                    { Name: "Angular2", Url: "https://angular.io" },
                    { Name: "Aurelia", Url: "https://aurelia.io" },
                    { Name: "Kendo UI", Url: "http://www.telerik.com/kendo-ui" },                    
                    { Name: "JQuery", Url: "https://jquery.com" },
                ]
            },            
            {
                Name: "skill-version-control-name",
                Tags: [
                    { Name: "Team Foundation Server", Url: "https://www.visualstudio.com/tfs/" },
                    { Name: "GIT", Url: "https://git-scm.com/" }
                ]
            },
            {
                Name: "skill-integrated-development-environment",
                Tags: [
                    { Name: "Visual Studio 2013-2017RC", Url: "https://www.visualstudio.com/" },
                    { Name: "Visual Studio Code", Url: "https://code.visualstudio.com/" },
                    { Name: "WebStorm", Url: "https://www.jetbrains.com/webstorm/" }
                ]
            },
            {
                Name: "skill-productivity-tools",
                Tags: [
                    { Name: "JetBrains ReSharper", Url: "https://www.jetbrains.com/resharper/" },
                    { Name: "JetBrains dotTrace", Url: "https://www.jetbrains.com/profiler/" },
                    { Name: "JetBrains dotMemory", Url: "https://www.jetbrains.com/dotmemory/" },
                    { Name: "Fiddler", Url: "http://www.telerik.com/fiddler" },
                    { Name: "PostMan", Url: "https://www.getpostman.com/"}
                ]
            }            

        ]
    }
}
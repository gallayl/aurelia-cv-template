import { Hobby } from './../models/hobby';

export class HobbyService {
    public Get(): Hobby[] {
        return [
            {
                Name: "hobby-iot",
                ImageUrl: "./assets/photo-iot.jpg",
                Tags: [
                    { Name: "Arduino", Url: "http://arduino.cc" },
                    { Name: "NodeMCU", Url: "http://www.nodemcu.com/index_en.html" },
                    { Name: "Raspberry PI", Url: "https://www.raspberrypi.org" },
                ]
            },
            {
                Name: "hobby-opensource",
                ImageUrl: "./assets/github-logo.png",
                Tags: [
                    { Name: "BLM utils for EF6", Url: "https://github.com/gallayl/FuryTech.BLM" },
                    { Name: "OData to TypeScript tools", Url: "https://github.com/gallayl/FuryTech.OdataTypescriptServiceGenerator" },
                    { Name: "Aurelia CV Template", Url: "https://github.com/gallayl/aurelia-cv-template" },
                ]
            },            
            {
                Name: "hobby-books",
                ImageUrl: "./assets/photo-books.jpg",
                Tags: [
                    { Name: "Fantasy", Url: "" },
                    { Name: "Sci-fi", Url: "" },
                    { Name: "Game adoptations", Url: "" },
                ]
            },
            {
                Name: "hobby-gaming",
                ImageUrl: "./assets/w3.jpg",
                Tags: [
                    { Name: "FPS", Url: "https://js-dos.com/games/doom2.exe.html" },
                    { Name: "Real time strategy", Url: "http://epicport.com/en/dune2" },
                    { Name: "Role playing games", Url: "http://thewitcher.com/en/witcher3" },
                    { Name: "Retro gaming", Url: "https://retropie.org.uk/" }
                ]
            },
            {
                Name: "hobby-bands",
                ImageUrl: "./assets/photo-music.jpeg",
                Tags: [
                    { Name: "Beastial Rage", Url: "https://beastialrage.bandcamp.com/" },
                    { Name: "Autumn Wings", Url: "" },
                    { Name: "Ideas", Url: "https://www.facebook.com/IdeasOfficial/" },
                ]
            }];
    }
}
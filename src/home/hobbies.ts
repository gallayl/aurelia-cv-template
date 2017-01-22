import { Hobby } from './../models/hobby';
import { HobbyService } from './../services/hobbyservice';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Hobbies{
    
    public Hobbies:Hobby[];
    
    constructor(private hobbieService: HobbyService) {
        this.Hobbies = this.hobbieService.Get();
    }
}
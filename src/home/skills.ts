import { Skill } from '../models/skill';
import { SkillService } from './../services/skillservice';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Skills{
    
    public Skills: Skill[];
    
    constructor(private SkillService:SkillService) {
        this.Skills = SkillService.Get();
        
    }

}
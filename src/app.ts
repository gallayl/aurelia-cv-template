import { LocalizationService } from './services/localizationservice';
import { OwnerService } from './services/ownerservice';
import { RouterConfiguration, Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export class App {

  private router: Router;

  constructor(private owner:OwnerService, private localize: LocalizationService) {
   
  }


  configureRouter(config: RouterConfiguration, router: Router): void {
    
    this.router = router;
    config.title = this.localize.Get('cv-title');
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home/home', title: `${this.owner.GetOwner().Name}` }
    ]);
  }
}

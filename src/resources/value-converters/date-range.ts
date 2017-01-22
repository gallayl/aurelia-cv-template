import { LocalizationService } from './../../services/localizationservice';
import { autoinject } from 'aurelia-framework';


@autoinject
export class DateRangeValueConverter {
  
  constructor(private localizationService: LocalizationService) {
    
  }
  
  toView(value:Date, until?: Date) {
    let dateNow = this.localizationService.Get("date-now");
    return value.getFullYear() + ((until!=null) ? ` - ${until.getFullYear()}` : ` - ${dateNow}`);
  }
}


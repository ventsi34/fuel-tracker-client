import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premiumFuelIcon'
})
export class PremiumFuelIconPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value) {
      return 'check'
    }

    return 'close';
  }

}

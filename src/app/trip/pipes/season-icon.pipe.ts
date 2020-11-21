import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seasonIcon'
})
export class SeasonIconPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'summer':
        return 'wb_sunny';
      case 'winter':
        return 'ac_unit'
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'airConditionerIcon'
})
export class AirConditionerIconPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value) {
      return 'ac_unit'
    }

    return '-';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drivePlaceIcon'
})
export class DrivePlaceIconPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'city':
        return 'location_city';
      case 'highway':
        return 'add_road'
      case 'mountain':
        return 'terrain'
    }
  }
}

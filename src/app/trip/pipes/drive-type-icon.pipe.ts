import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'driveTypeIcon'
})
export class DriveTypeIconPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'slow':
        return 'arrow_forward';
      case 'normal':
        return 'north_east'
      case 'fast':
        return 'arrow_upward'
    }
  }

}

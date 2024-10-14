import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, capitalize: boolean): string {
    if (capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return value.charAt(0).toLowerCase() + value.slice(1);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
      if (isString(value)) {
        return value.split('').reverse().join('');
      }
      console.log("Reverse")

      return Array.isArray(value)
        ? value.reverse()
        : value;
  }

}



export function isString(value: any) {
  return typeof value === 'string';
}

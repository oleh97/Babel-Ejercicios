import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oculto'
})
export class OcultoPipe implements PipeTransform {

  transform(value: string, arg1: Array<string> = ['b'], arg2: string = '*'): string {

    return value.split('').map( (elem) => {
        if (arg1.includes(elem.toLowerCase())) {
          return arg2;
        } else { return elem; }
       }).join('');
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientes'
})
export class ClientesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 1) {
      return "Ted";

    } else {
      return "Débora"
    }
  }
}

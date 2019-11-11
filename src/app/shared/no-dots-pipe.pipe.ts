import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noDotsPipe'
})
export class NoDotsPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      value = value.replace('.', '');
    }
    return value;
  }

}

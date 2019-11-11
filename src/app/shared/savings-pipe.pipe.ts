import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'savingsPipe'
})
export class SavingsPipePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      value = value.replace('.', '');
    }
    return value;
  }

}

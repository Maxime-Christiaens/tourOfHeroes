import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterArray'
})

export class FilterArrayPipe implements PipeTransform {

    transform(value: any, limit: number): any {
        return value.filter((data, index) => {
            if (index < limit) {
              return data;
            }
          });
    }
}

  import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value:object, ...args: unknown[]): unknown {
    let data=JSON.stringify(value);
    return data;
  }

}

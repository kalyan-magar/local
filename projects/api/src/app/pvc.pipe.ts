import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pv'
})
export class PvcPipe implements PipeTransform {

  transform(value: String, ...args: string[]): string {
    value=value.toUpperCase();
    const result:string = args[0]+value+args[1]
    return result ;
  }

}

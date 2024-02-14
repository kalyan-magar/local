import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  nValue!:string;

  transform(value: unknown, ...args: unknown[]): any{
    
  }

}

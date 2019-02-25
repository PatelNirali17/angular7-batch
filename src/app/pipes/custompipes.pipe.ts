import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customslice'
})
export class CustompipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){
      return null;

    }
    // return value.slice(2,10)
    return value.substr(0,4)
  }

}

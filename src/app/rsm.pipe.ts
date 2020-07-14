import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rsm'
})
export class RsmPipe implements PipeTransform {
mylimit:number;
  transform(value: string, args: number): any {
    
    if(!value){
      return null
    }
    this.mylimit=(args)?args:12;
    return value.substr(0,this.mylimit);
  }

}

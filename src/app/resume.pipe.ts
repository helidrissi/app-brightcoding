import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {
  myl:number;
  transform(value: string, l?: number): unknown {
    
    if(!value){
      return null;
    }
   
    this.myl=(l) ? l:2;

    
    return value.substr(0,this.myl);
  }

}

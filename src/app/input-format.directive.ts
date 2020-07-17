import { Directive, HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('f') format;
  constructor(private el:ElementRef){}
  @HostListener('blur') OnBlur(){

    let value:string=this.el.nativeElement.value;
    if(this.format=="haza")
    {
      this.el.nativeElement.value=value.toUpperCase();
    }
    else
    {
      this.el.nativeElement.value=value.toLowerCase();
    }

  }
  @HostListener('focus') OnFocus(){

    console.log("On focus")
  }

}

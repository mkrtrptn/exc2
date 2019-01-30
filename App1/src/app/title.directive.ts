import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  constructor(e1:ElementRef)
  {
    e1.nativeElement.style.color="yellow";
    e1.nativeElement.style.backgroundColor="Black";
    e1.nativeElement.style.width="40%";


  }

}

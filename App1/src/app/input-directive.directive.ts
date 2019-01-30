import { Directive, ElementRef,OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appInputDirective]'
})
export class InputDirectiveDirective {



@Input()
bcolor:string;

constructor(private e1:ElementRef)
{
 
e1.nativeElement.style.color="black";
e1.nativeElement.style.width="40%";
}

ngOnInit()
{
this.e1.nativeElement.style.backgroundColor = this.bcolor;
}

}

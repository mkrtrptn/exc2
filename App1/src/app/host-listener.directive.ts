import { Directive,HostListener,ElementRef} from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '../../node_modules/@angular/core/src/view/provider';

@Directive({
  selector: '[appHover]'
})
export class HostListenerDirective {

  constructor(private e1:ElementRef)
  {
  e1.nativeElement.style.backgroundColor="white";
  }

 @HostListener('mouseenter') onmouseenter()
 {
this.e1.nativeElement.style.backgroundColor ="green";
this.e1.nativeElement.style.color="white";
 }


 @HostListener('mouseleave') onmouseleave()
 {
   this.e1.nativeElement.style.backgroundColor="yellow";
   this.e1.nativeElement.style.color="black";
 }

@HostListener('click') click()
{
  this.e1.nativeElement.style.backgroundColor="blue";
  this.e1.nativeElement.style.color="white";
}


}

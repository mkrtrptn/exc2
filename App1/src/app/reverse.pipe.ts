import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value:string , args?:any): any  {
  var reverse:string="";
  for(let i=value.length-1;i>=0 ;i--)
  {
    reverse = reverse + value.charAt(i);
   
  }

   return reverse;
  
  }

}

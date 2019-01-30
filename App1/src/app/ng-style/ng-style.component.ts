import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: []
})
export class NgStyleComponent implements OnInit {

  constructor() { }
 num1:number=0;
 num2:number=0;
 result:number=0;
 look={"color":"","visibility":"hidden","background-color":"","font-size":"200px"}

 // Creating stylesheet in class
add()
{
this.result = this.num1+this.num2;
this.look={"color":"Green","visibility":"visible","background-color":"sky-blue;","font-size":"200px"};
}

mult()
{
  this.result= this.num1 * this.num2;
  this.look={"color":"Blue","visibility":"visible","background-color":"yellow","font-size":"200px"};
}





  ngOnInit() {
  }

}

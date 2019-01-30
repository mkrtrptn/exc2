import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {


   num1:number =0;
   num2:number=0;
   result:number;
   lookclass="c1";


  add()
  {
    this.result=this.num1 +this.num2 ;
    this.lookclass ="c2";
  }

  mul()
  {
    this.result = this.num1*this.num2;
    this.lookclass ="c3";
  }

  constructor() { }

  ngOnInit() {
  }

}

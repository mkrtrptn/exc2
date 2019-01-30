import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styles: []
})
export class NgIfComponent implements OnInit {

  constructor() { }


   n:number=0;
   flag:boolean =false;

   toggle()
   {
     this.flag = ! this.flag;
   }








  ngOnInit() {
  }

}

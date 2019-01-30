import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventstylebinding',
  templateUrl: './eventstylebinding.component.html',
  styles: []
})
export class EventstylebindingComponent implements OnInit {
  constructor() { }

   msg:string;
   textcolor:string = "blue";
   hovercolor:string;


  m1(s:string)
  {
 this.msg=s;
  }
  m2()
  {
    this.msg="";
  }

  ngOnInit() {
  }

}

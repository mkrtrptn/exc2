import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styles: []
})
export class OnewayComponent implements OnInit {

  constructor() { }
   
  prodId:string =  "W5240";
  prodName:string= "dell";
  prodImage:string= "wal.jpg";
  flag:boolean= true;

  ngOnInit() {
  }

}

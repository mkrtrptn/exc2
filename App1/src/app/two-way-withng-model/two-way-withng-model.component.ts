import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-withng-model',
  templateUrl: './two-way-withng-model.component.html',
  styles: []
})
export class TwoWayWithngModelComponent implements OnInit {

  constructor() { }
  price:number = 0;
  qty:number=0;

  ngOnInit() {
  }

}

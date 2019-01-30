import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styles: []
})
export class AbcComponent implements OnInit {

sum(a:number,b:number):number
{
var res = a+b;
return res;
}


  constructor() { }

  ngOnInit() {
  }

}

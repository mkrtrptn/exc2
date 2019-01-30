import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './display.component.html',
  styles: []
})
export class DisplayComponent implements OnInit {

prods:Product[];

  constructor(private _httpclient:HttpClient) {
    this._httpclient.get("http://localhost:81/api/inventory").subscribe(
    (res:Product[])=>{
      this.prods = res;
    },
  (err)=>
  {
    
    window.alert("Server Error")
  }
);

}

  ngOnInit() {
  }

}

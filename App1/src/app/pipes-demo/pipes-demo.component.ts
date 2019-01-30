import { Component, OnInit } from '@angular/core';


class product {
  constructor(public pid:string,public name:string) {
    
  }
}


@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styles: []
})
export class PipesDemoComponent implements OnInit {

  public pinfo:product =new product("p001","dell");
  einfo ={"name":"rama linga prasad" , "job":"TRAINNER", "sal":10000.655515,"da":5000.51551,"doj":new Date() }
 alp:string="abcd";
  constructor() { }

  ngOnInit() {
  }

}

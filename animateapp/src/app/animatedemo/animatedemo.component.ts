import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from  '@angular/animations';



@Component({
  selector: 'app-animatedemo',
  animations:[ trigger("animation1",[state("normal",style({backgroundColor:"yellow",Transform:"scale(5:3)"})),
                                     state("large" , style({backgroundColor:"bisque",Transform:"scale(8:8)"})),
                                     transition("normal=>large" , animate("1000ms ease-in")),
                                     transition("large=>normal",animate("1400ms ease-in"))
                                    ])
             ],
  templateUrl: './animatedemo.component.html',
  styles: []




})

export class AnimatedemoComponent implements OnInit {

statevalue:string = "normal";

changestate(){

if(this.statevalue=="normal")
    this.statevalue="large";
else this.statevalue="normal";

}

  constructor() { }

  ngOnInit() {
  }

}

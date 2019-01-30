import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {

name:string ="Muktar";
pinfo = {"pid":"p1002","name":"dell" }
msg:string ="";

m2(s:string)
{
this.msg = s;
}

constructor() { }

ngOnInit() {
  }

}

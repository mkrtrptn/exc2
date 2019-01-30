import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

@Input()
name1:string;

@Input()
pinfo1:object;

@Output()
myevent = new EventEmitter<string>();


m1()
{
  this.myevent.emit("Hello" + "   "+ this.name1);
}

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styles: []
})
export class NgForComponent implements OnInit {

  constructor() { }

 courses:string[] = ["MVC","ASP","ANGULAR","C#","Jquery","React","Vb.net"]

 

  ngOnInit() {
  }

}

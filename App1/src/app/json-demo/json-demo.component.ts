import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-demo',
  templateUrl: './json-demo.component.html',
  styles: []
})
export class JsonDemoComponent implements OnInit {

  constructor() { }

  facultyinfo ={"name":"RLP","courses":["MVC","ANGULAR","REACT"]};
  product=[

    {"id":"p001","name":"Dell","price":45000,"pic":"dell.jpg"},
    
    {"id":"p001","name":"Dell","price":35000,"pic":"dell.jpg"},
    
    {"id":"p001","name":"Dell","price":18000,"pic":"acer.jpg"},

    {"id":"p001","name":"Dell","price":7000,"pic":"hp.jpg"}

  ];

  
  ngOnInit() {
  }

}

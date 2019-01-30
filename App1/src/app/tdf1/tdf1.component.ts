import { Component, OnInit } from '@angular/core';
import {FormsModule,FormControl,FormGroup,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-tdf1',
  templateUrl: './tdf1.component.html',
  styles: []
})
export class TDF1Component implements OnInit {

firstname:string;
lastname:string;
email:string;
msg:string;


register(myform1)
{
if(myform1.valid)
{
  this.msg = this.firstname +  " " +
  this.lastname + " " + this.email;
}
  
}




  constructor() { }

  ngOnInit() {
  }

}

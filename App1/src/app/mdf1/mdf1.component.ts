import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { registerContentQuery } from '../../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'app-mdf1',
  templateUrl: './mdf1.component.html',
  styles: []
})
export class MDF1Component implements OnInit {

myform:FormGroup;
msg:string;

  constructor()
   {

  this.myform = new FormGroup(
    {
    firstname:new FormControl("",[Validators.required]),
    lastname: new FormControl("",[Validators.required]),
    emailid:new FormControl("",[Validators.email]),
    phone:new FormControl("",[Validators.pattern('^[0-9]{10}$')])
    },
    {updateOn:"change"}); 
  }

register()
{

if(this.myform.valid)
{
this.msg = this.myform.value.firstname + " "
+this.myform.value.lastname + "  " +
this.myform.value.emailid +" " +
this.myform.value.phone;               
}
else
this.msg = "Fill Required Information ..";

}

  ngOnInit() {
  }

}

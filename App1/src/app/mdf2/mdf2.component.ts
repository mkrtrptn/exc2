import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-mdf2',
  templateUrl: './mdf2.component.html',
  styles: []
})
export class MDF2Component implements OnInit {

myform:FormGroup;
mybuilder:FormBuilder;
msg:string;

constructor()
{

this.mybuilder =new FormBuilder();
this.myform = this.mybuilder.group
({
username :["",[Validators.required,Validators.pattern('^[a-zA-Z]{1,8}$')]],
password:["",[Validators.required]],
gender:["",[Validators.required]],
age:["",[Validators.required, Validators.pattern('^2[0-9]|3[0-9]|4[0-5]$')]],
phone:["",[Validators.required, Validators.pattern('^[0-9]{10}$')]],
city:["",[Validators.minLength(3), Validators.maxLength(10)]],
country:["",[Validators.required]]
},
{updateOn:"change"})
}

register()
{
  this.msg=this.myform.value.username  + " " +
  this.myform.value.gender + " " + 
  this.myform.value.city + " "+
  this.myform.value.country ;
}


  ngOnInit() {
  }

}

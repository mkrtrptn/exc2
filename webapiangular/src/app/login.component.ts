import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

myform:FormGroup;
msg:string;


  constructor(private _router:Router)
   {
    this.myform =new FormGroup
      ({
        username:new FormControl("",[Validators.required]),
        password:new FormControl("",[Validators.required])
      });
   }

  ngOnInit() {
  }



  authenticate()
  {
   if(this.myform.value.username =="muktar" && this.myform.value.password=="ml")
   {
     sessionStorage.setItem("uname",this.myform.value.username);
     sessionStorage.setItem("token","token1");
     this._router.navigate(['/dashboard']);
   }

   else
   {
     this.msg ="Invalid username or password .";
   }
  }




}

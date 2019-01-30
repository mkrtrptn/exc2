import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product} from './product';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './addproduct.component.html',
  styles: []
})
export class AddproductComponent implements OnInit {

pinfo: Product = new Product("", "", null);
msg:string;
flag: boolean;
constructor(private _httpclient: HttpClient) {}

 saveproduct()
 {
  this.flag=true;
 
  this._httpclient.post("http://localhost:81/api/inventory",this.pinfo).subscribe(
    (res:string)=>{
      if(res=="failed")
         this.msg="Record Already Existed";
      else
        this.msg="Record Inserted Successfully";
        this.flag=false;
      //clear all record
    this.pinfo.prodid ="";
    this.pinfo.proddesc="";
    this.pinfo.prodprice=null;


    },

    (err)=>
    {
     this.msg="Server Error ";
     this.flag=false;
    }
  );

 }


  ngOnInit() {
  }

}

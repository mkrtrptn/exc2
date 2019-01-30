import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './operations.component.html',
  styles: []
})
export class OperationsComponent implements OnInit {
pinfo:Product = new Product("","",null);
resturl:string="http://localhost:81/api/inventory/";
constructor(private _httpclient:HttpClient) { }

clear()
{
  this.pinfo.prodid="";
  this.pinfo.proddesc="";
  this.pinfo.prodprice=null;
}

search()
{
  this._httpclient.get(this.resturl +"/" +this.pinfo.prodid).subscribe(
    (res:Product)=>{
      if(res==null)
        window.alert("No Record Found ");
      else
        this.pinfo = res;  

    },
  (err)=>{
    window.alert("Server Error");
  }

  );

}


modify()
{
this._httpclient.put(this.resturl ,this.pinfo).subscribe(
()=> {
window.alert("Record Updated");
this.clear();
},

(err)=>{
window.alert("Server Error");
}

);

} 


delete()
{
this._httpclient.delete(this.resturl + "/" + this.pinfo.prodid).subscribe(
()=>{
  window.alert("Record Deleted ");
  this.clear();
},
(err)=>{
  window.alert("Server Error !");
}


);
}





  ngOnInit() {
  }

}

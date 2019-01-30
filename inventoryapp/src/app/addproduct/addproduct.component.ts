import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styles: []
})
export class AddproductComponent implements OnInit {

pinfo:Product = new Product("","",null);

constructor(private _inventoryservice:InventoryService) //DI
{ }

saveproduct()
{
  this._inventoryservice.addProduct(new Product(this.pinfo.pid,this.pinfo.name,this.pinfo.price));
  //clearing Textboxes

  this.pinfo.pid="";
  this.pinfo.name="";
  this.pinfo.price=null;

  window.alert("Product Information Saved .");
}

  ngOnInit() {
  }

}

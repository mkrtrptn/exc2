import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

prods:Product[] = [  
  new Product("101", "HTC" ,18000),
  new Product("102" ,"APPPLE",1578000),
  new Product("103","DELL",70000),
  new Product("104","LENOVO",32000),
  new Product("105","ASUS",18000),
  new Product("106","ACER",15000),
  new Product("107","HP",38000)
 ];

addProduct(p:Product)
{
this.prods.push(p);
}

getprods():Product[] //all products
{
  return this.prods;
}

getprod(productid:string):Product 
{
var pinfo:Product;
pinfo = this.prods.find( p=> p.pid==productid)
return pinfo;
}





}

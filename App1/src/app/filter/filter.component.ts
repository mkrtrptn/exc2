import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: []
})
export class FilterComponent implements OnInit {

 prods=[
   {"pid":"p001" ,"name":"Dell" ,"price":"400000"},
   
   {"pid":"p002" ,"name":"hp" ,"price":"35000"},
   
   {"pid":"p003" ,"name":"samsung" ,"price":"25000"},
   
   {"pid":"p004" ,"name":"apple" ,"price":"24000"},
   
   {"pid":"p005" ,"name":"lenovo" ,"price":"30000"},
   
   {"pid":"p006" ,"name":"acer" ,"price":"8000"},

   {"pid":"p007" ,"name":"Asus" ,"price":"8000"}

];

products = [];

filterdata(letter:string)
{

this.products =this.prods.filter(p =>{
return p.name.startsWith(letter);

});

}






  constructor() { }

  ngOnInit() {
  }

}

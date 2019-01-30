import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: []
})
export class DisplayComponent implements OnInit {

  prodarray:Product[];
  
  constructor(private _inventoryservice:InventoryService) 
  {
    this.prodarray =this._inventoryservice.getprods();
  }
 

  ngOnInit() {
  }

}

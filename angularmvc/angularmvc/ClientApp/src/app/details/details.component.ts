import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit ,OnDestroy
{

  pinfo:Product;
  sub:any;

  constructor(private _inventoryservice:InventoryService,private _activatedroute:ActivatedRoute)
   {

   }

  
  
  ngOnInit()
  {
 
    this.sub = this._activatedroute.paramMap.subscribe 
    (  
      paras =>{
      this.pinfo=this._inventoryservice.getprod(paras.get("pid"));
    });

  }

  ngOnDestroy()
  {
 // this.sub.unsubscribe(); // NLot required if using paramMap
  }




}

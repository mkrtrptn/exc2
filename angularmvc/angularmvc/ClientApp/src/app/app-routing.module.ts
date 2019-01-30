import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DisplayComponent } from './display/display.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {path:"about",component:AboutComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"display",component:DisplayComponent},
  {path:"details/:pid",component:DetailsComponent}
                        ];

                        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

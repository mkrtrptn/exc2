import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './tutorials.component';
import { BooksComponent } from './books.component';
import {RouterModule, Routes} from '@angular/router';


const children:Routes=[
{path:"tutorials",component:TutorialsComponent},
{path:"books",component:BooksComponent}
];


@NgModule({
  declarations: [TutorialsComponent, BooksComponent],
  imports: [
    CommonModule,RouterModule.forChild(children)
  ]
})
export class ResourcesModule { }

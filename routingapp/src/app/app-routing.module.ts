import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ServicesComponent } from './services.component';
import { TrainningComponent } from './trainning.component';
import { ConsultancyComponent } from './consultancy.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [


  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"courses" , component:CoursesComponent},

  {path:"services" , component:ServicesComponent,
  
  children:[
    {path:"trainning",component:TrainningComponent},
    {path:"consultancy",component:ConsultancyComponent}
  ]},
  { path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, AboutComponent, ContactComponent, ServicesComponent, TrainningComponent, ConsultancyComponent, CoursesComponent]
})
export class AppRoutingModule { }

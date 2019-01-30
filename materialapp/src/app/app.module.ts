import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule,MatFormFieldModule,MatButtonModule,MatIconModule,MatTooltipModule,MatProgressSpinnerModule,MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtondemoComponent } from './buttondemo/buttondemo.component';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';
import { TutorialsComponent } from './tutorials.component';
import { BooksComponent } from './books.component';
import { DashboardComponent } from './dashboard.component';
import {MatToolbarModule}from '@angular/material';
import{ FormsModule,ReactiveFormsModule } from '@angular/forms'
import{AuthguardService} from './authguard.service';
import {ConfirmguardService} from './confirmguard.service';
import {RouterModule,Routes} from '@angular/router';

import{APP_BASE_HREF} from '@angular/common';

const routes:Routes = [
{path:"about" ,component:AboutComponent},
{path:"login",component:LoginComponent,canDeactivate:[ConfirmguardService]},
{path:"dashboard",component:DashboardComponent},

{path:"tutorials",component:TutorialsComponent,canActivate:[AuthguardService]},
{path:"books",component:BooksComponent,canActivate:[AuthguardService]},
{path:"resources",loadChildren:"./resources/resources.module#ResourcesModule"},

];

@NgModule({
   declarations: [
    AppComponent,
    ButtondemoComponent,
    AboutComponent,
    LoginComponent,
    TutorialsComponent,
    BooksComponent,
    DashboardComponent

  ],
imports: [BrowserAnimationsModule,
  BrowserModule,MatCardModule,MatFormFieldModule,MatButtonModule,MatIconModule,MatTooltipModule,MatProgressSpinnerModule,MatInputModule
  ,MatToolbarModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes)],
  providers: [{provide:APP_BASE_HREF,useValue:''}],
  bootstrap: [AppComponent]
})

export class AppModule { }

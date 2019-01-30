import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimatedemoComponent } from './animatedemo/animatedemo.component';
import{ BrowserAnimationsModule} from "@angular/platform-browser/animations"


@NgModule({
  declarations: [
    AppComponent,
    AnimatedemoComponent,

  ],
  imports: [
    BrowserModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AnimatedemoComponent]
})
export class AppModule { }

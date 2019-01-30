import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OnewayComponent } from './oneway/oneway.component';
import { EventstylebindingComponent } from './eventstylebinding/eventstylebinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TwoWayWithngModelComponent } from './two-way-withng-model/two-way-withng-model.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { JsonDemoComponent } from './json-demo/json-demo.component';
import { TitleDirective } from './title.directive';
import { TitleComponent } from './title/title.component';
import { InputDirectiveDirective } from './input-directive.directive';
import { InputDirectiveComponent } from './input-directive/input-directive.component';
import { HostListenerDirective } from './host-listener.directive';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ReversePipe } from './reverse.pipe';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MDF1Component } from './mdf1/mdf1.component';
import { MDF2Component } from './mdf2/mdf2.component';
import { TDF1Component } from './tdf1/tdf1.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ObDemoComponentComponent } from './ob-demo-component/ob-demo-component.component';


@NgModule({
  declarations: [
    AppComponent,
    OnewayComponent,
    EventstylebindingComponent,
    TwowaybindingComponent,
    TwoWayWithngModelComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    JsonDemoComponent,
    TitleDirective,
    TitleComponent,
    InputDirectiveDirective,
    InputDirectiveComponent,
    HostListenerDirective,
    PipesDemoComponent,
    ReversePipe,
    FilterComponent,
    SortComponent,
    ChildComponent,
    ParentComponent,
    MDF1Component,
    MDF2Component,
    TDF1Component,
    ObservableDemoComponent,
    ObDemoComponentComponent,
  ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule],
  providers: [],
  //bootstrap: [TwowaybindingComponent,TwoWayWithngModelComponent,NgStyleComponent,NgStyleComponent,NgClassComponent,NgIfComponent,NgForComponent,JsonDemoComponent,TitleComponent,FilterComponent,SortComponent,ParentComponent,MDF2Component ]
  bootstrap: [ObDemoComponentComponent]
})

export class AppModule { }

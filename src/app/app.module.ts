import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ChildComponent } from './first-component/child/child.component';
import { FormsModule } from '@angular/forms';
import { USDINRPipe } from './pipes/usd-inr.pipe';
import { HttprequestComponent } from './httprequest/httprequest.component'
import { HttpClientModule } from '@angular/common/http';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { OperatorsComponent } from './operators/operators.component';
import { DifferentmapsComponent } from './differentmaps/differentmaps.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ChildComponent,
    USDINRPipe,
    HttprequestComponent,
    Compo1Component,
    Compo2Component,
    OperatorsComponent,
    DifferentmapsComponent,
    FormComponent,
    ReactiveFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

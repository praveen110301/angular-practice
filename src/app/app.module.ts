import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ChildComponent } from './first-component/child/child.component';
import { FormsModule } from '@angular/forms';
import { usdInrPipe } from './pipes/usd-inr.pipe';
import { HttprequestComponent } from './httprequest/httprequest.component'
import { HttpClientModule } from '@angular/common/http';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { OperatorsComponent } from './operators/operators.component';
import { DifferentmapsComponent } from './differentmaps/differentmaps.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './routing/error/error.component';
import { DisplayDirective } from './directives/display.directive';
import { UserComponent } from './routing/user/user.component';
import { PipeFileComponent } from './pipe_example/pipe_file.component';
import { GiveTitlePipe } from './pipe_example/title.pipe'
import { HoverDirective } from './pipe_example/hover.directive'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ChildComponent,
    usdInrPipe,
    HttprequestComponent,
    Compo1Component,
    Compo2Component,
    OperatorsComponent,
    DifferentmapsComponent,
    FormComponent,
    ReactiveFormComponent,
    ButtonsComponent,
    LifecyclehooksComponent,
    ViewChildComponent,
    RoutingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    DisplayDirective,
    UserComponent,
    PipeFileComponent,
    GiveTitlePipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

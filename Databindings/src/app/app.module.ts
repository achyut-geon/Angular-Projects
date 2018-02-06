import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StringDatabindingComponent } from './01string-databinding/string-databinding.component';
import { PropertyBindingComponent } from './02property-binding/property-binding.component';
import { EventBindingComponent } from './03event-binding/event-binding.component';
import { OnewayBindingComponent } from './04oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './05twoway-binding/twoway-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    StringDatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    OnewayBindingComponent,
    TwowayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

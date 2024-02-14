import { NgModule } from '@angular/core';
//to define  Module in angular one directive NgModule
import { BrowserModule } from '@angular/platform-browser';
// to make this module compatible to browser
// who is bringing angular

import { AppComponent } from './app.component';
import { MyComponent } from './Component/my.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
// import my component

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    HeaderComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,MyComponent,HeaderComponent,QuoteComponent]
})
export class AppModule { }

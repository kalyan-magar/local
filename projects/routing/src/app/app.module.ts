import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// used for routing
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DataArrayService } from './data-array.service';
// configure routes what route lead to what 
// OR DEFINE 
// path
const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
]

// Routes to be  imported AND loaded (possibility -> 'honge' or 'hone chaheeye'); 
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    // here routes passed or loaded   
    BrowserModule,[RouterModule.forRoot(routes)]
  ],
  providers: [DataArrayService],// anything you write in BOSS import it 
  // who is provider
  bootstrap: [AppComponent]
})
export class AppModule { }

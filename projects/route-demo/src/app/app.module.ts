import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroComponent } from './hero/hero.component';
import { VillonComponent } from './villon/villon.component';

import {HttpClientModule } from '@angular/common/http';
import { authGuard } from './auth.guard';

//configure
const routes:Routes=[
  {path:'',
  component:HomeComponent,
  children:[{path:'hero',component:HeroComponent},{path:'villon',component:VillonComponent}],
 
  },
  {path:'h',component:HeroComponent},
  {path:'about',component:AboutComponent,
  canActivate:[authGuard]},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:NotFoundComponent,pathMatch:'full'},
  // OR
  // {path:'**',redirectTo:'home', }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    NotFoundComponent,
    HeroComponent,
    VillonComponent
  ],
  imports: [
    BrowserModule,
    // telling angualar static to dynamic consider it as url routes
    [RouterModule.forRoot(routes)],HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TagPipe } from './tag.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TagPipe,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule ,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

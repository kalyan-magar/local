import { Component } from '@angular/core';

@Component({
  selector: 'ang', //this name can be used as html elment
  templateUrl: './app.component.html',
  // template:'<H1>Hello Virat</H1>',
  styleUrls: ['./app.component.css']
  // styles:['h1{color:Blue}']
})
export class AppComponent {
  title = 'hi';
}

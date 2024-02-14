import { AfterViewChecked, AfterViewInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck , AfterViewInit,AfterViewChecked{
  ngAfterViewChecked(): void {
    console.log("after view checked")
  }
  ngAfterViewInit(): void {
    console.log("after view inittialized")
  }
  ngDoCheck(): void {
    console.log("do  changes")
    // throw new Error('Method not implemented.');
  }
  

}

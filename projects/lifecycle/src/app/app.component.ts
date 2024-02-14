import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  data:String="it is parent";
  value=""
  n:number=0;
  title = 'lifecycle';
  constructor(){
   
    console.log("I'm in constructor of AppComponet = "+(++this.n));
  }
  ngOnInit(){
    console.log("i'm in init of Appcomponet")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changing")
      console.log(changes)
  }

}

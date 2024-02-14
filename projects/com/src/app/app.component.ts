import { Component, ViewChild, ViewChildren } from '@angular/core';
import { OnInit } from '@angular/core';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'com';
  msg:string='';
  name:string='Kalyan'
  names:string[]=["Kalyan","suraj","Pankaj","rohit","shreyash","Rahul","virat"]
  // fruits:string[]=["mango","banana","orange"]
  fruits=[
    {fr:"mango",img:'https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_1280.jpg'},
    {fr:"banana",img:'https://cdn.pixabay.com/photo/2023/03/09/14/46/bananas-7840213_1280.jpg'},
    {fr:"orange",img:'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg'}
  ]
  // .......................................................................................
 @ViewChild(MainComponent) ch:any

  // @ViewChild("prr")
  @ViewChildren("prr")
  P:any;
 
  rc(n:number){
  
    return  Math.floor(Math.random()*n)
  }
  static a=0;
  changeBG(){
    if(AppComponent.a++ <1){
      console.log(this.ch);
      console.log(this.P)
      console.log(this.ch.message)
    }
   
 let rdCol=`rgb(${this.rc(256)},${this.rc(256)},${this.rc(256)},${0.5})`
  this.P.first.nativeElement.style.background=rdCol
  let rdCol2=`rgb(${this.rc(256)},${this.rc(256)},${this.rc(256)},${0.2})`
  this.P._results[1].nativeElement.style.background=rdCol2
  }
  // ...............................................................................



  items=['item1','item2','item3','item4']
  addItem(newItem:string){
    console.log("inside parent add item method");
this.items.push(newItem);
  }
  ngOnInit(): void {
    this.msg='this is Parent Component message'
  }
  constructor(){

  }

}

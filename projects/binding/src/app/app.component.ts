import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  name:string="Data  Binding";
   dis:boolean=true

  // light:string='light'
  // dark:string='dark'
  
  isEnable= true;
 cname:string=(this.isEnable)?'light':'dark'

 c:string="yellow"

public say(){
  alert("you Clicked Say Funtion logic")
 }

//  signal on input 0 Or 1


public input:number=1


signalOnValue=this.input===1?true:false;
signalOffValue=this.input===0?true:false;

public singnal:string=(this.input==1)?"siOn":"siOff";




}


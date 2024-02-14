import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent {
public username:string ="RAM NAVAMI-2024 !";
public  topic:string="RAM"
public path:string="https://www.google.com";
public images ="/assets/ram.jpg"

public disFlag:boolean=(this.topic==="RAM" )?false:true;
public newClass:string=(this.topic==="RAM")?'light':'dark';

onClick(){
  console.log("you VIsited");
}
  greet(){
    alert(`HARE ${this.topic}`)
  }
  


// dt = new Date();



}

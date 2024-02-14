import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='routePara';
  constructor(private s:Router){
    
  }
  users=[
    {name:'Sunil',age:21,id:101},
    {name:'Ritik',age:23,id:103},
    {name:'Ashutosh',age:50,id:104},
    {name:'Gavrav',age:28,id:102}
  ]
call(id:number){
  console.log(id)
  this.s.navigate(['users',id]);
}
  
  
} 

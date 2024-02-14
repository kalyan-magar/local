import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
userNames=[{name:"Sham"},{name:"Pavan"},{name:"Amar"},
{name:"Suraj"},{name:"Balaji"},{name:"Krishna"}]

constructor(private r:Router){

}
  passName(userName:string){
      console.log(userName)
    this.r.navigate(["userName",userName]);
   }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  UserID:number=0;
  constructor(public a :ActivatedRoute){
    
    this.a.params.subscribe((para)=>{
      console.log("Para" +para['id'],
      this.UserID=+para['id'])
    });

  }

}

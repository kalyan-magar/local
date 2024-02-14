import { Component } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  // what is assignment assertion ???
  // A statement that you strongly believe is.
  dateToday: string='';
  name: string='';
  constructor(){}
  onInit():void{
    this.dateToday=new Date().toDateString();
    this.name="hiiSimpllilearn"

  }

}

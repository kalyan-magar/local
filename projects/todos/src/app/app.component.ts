import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public t:TodoServiceService){

  }

  title = 'todos';
  task:string="";
  name:string="What to do"

 addTask() {
    this.t.addTodo(this.task)
 }
}

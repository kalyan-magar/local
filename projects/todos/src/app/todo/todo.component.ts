import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  constructor(public t:TodoServiceService){

  }
  // element=document.getElementById("todoList") as HTMLElement
  delTodo(i:number){
   this.t.deleteTodo(i)
  }

  tasks:string[]=this.t.getTodoArray();
 
 

}

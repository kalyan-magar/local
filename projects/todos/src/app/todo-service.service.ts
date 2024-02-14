import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private tasks:string[] =["Lecture"];//printing logic in the todo component 

  addTodo(todo:string):void{ // adding logic in the component
    if(todo!==''){
    this.tasks.push(todo)
    }

  }
getTodoArray(){
  return this.tasks
}

deleteTodo(i:number){
  
  this.tasks.splice(i,1);
}

  constructor() { }
}

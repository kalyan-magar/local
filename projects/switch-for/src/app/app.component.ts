import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switchFor';
  days=0;

  incr(){
    if(this.days<6)
    this.days++;  
   else
    this.days=0;
   }
   todos={}
   value:(string)[]=[]
keys:(string)[]=[]
   fetchData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=>{
console.log(res);
return res.json();
})
.then((data)=>{
  console.log(data);
   this.todos=data;
   console.log( this.todos);
  })
  this.keys =Object.keys(this.todos)
  this.value=Object.values(this.todos)
  }
 

   data=['mobiles','tabletes','tv','laptops']
}

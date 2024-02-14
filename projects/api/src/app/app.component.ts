import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
  title = 'ANGULAR  works';
  number=100;
  person={
    name:"kalyan",
    age:20
  }
  d=new  Date();
  per=3
  
   url='https://fakestoreapi.com/products'
 data:any;
   /*  fetch Free PUblic API>> Public API you will get data directly,,
    Some API code  : api key  ,,, 
    API authorisation  
  */
 constructor(){
  this.fetchData(this.url);
 }

 /*
 fetchData(url:string){
  fetch(url) .then((res)=> {console.log(res);return res.json() })
 .then((data)=> {console.log(this.data=data)});
  }
  */
 
 async   fetchData(url:string){
   try {
    const response= await fetch(url);

    if(response.ok ){
     // you may get wrong data check it 
       const data = await response.json();
       this.data=data;
     }
   else 
     {console.log("error");}

  } catch (error) {
    
  }
  
 }
 
}

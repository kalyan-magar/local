import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataArrayService {
value:any;
configUrl='https://jsonplaceholder.typicode.com/posts'
  constructor(private ht:HttpClient) { 
  this.value=ht.get(this.configUrl);
  console.log(this.value);
  this.value.subscribe((v:any)=>{
       console.log(v)
  })

  }
}

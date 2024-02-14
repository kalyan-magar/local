import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="http://localhost:3000/books"
  constructor(private hc:HttpClient) { 

  }
  getData(){
    return this.hc.get(this.url)
  }
}

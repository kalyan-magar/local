import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //for dependency injection

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url='https://fakestoreapi.com/products';
productData:any
//public http:HttpClient >> public htttp= new HttpClient();
  constructor(public http:HttpClient) {
 this.productData=this.http.get(this.url)
   }
   getProducts(){
    return this.productData;
   }
}

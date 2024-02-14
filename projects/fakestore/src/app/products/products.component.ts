import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any
  constructor(public productService:ProductService){

  }
ngOnInit(){
 this.productService.getProducts().subscribe(
  (data:Object)=>
   this.products=data)
 
   console.log(this.products)
}

}

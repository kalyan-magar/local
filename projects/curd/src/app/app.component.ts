import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curd';
  showData=false;
  data:any;

  ngOnInit(): void {
      this.getDataMehod()
  }
  constructor(private api:ApiService){

  }
  getDataMehod(){
    this.data=this.api.getData().subscribe(
      (data)=>this.data=data,
      (error)=>console.log(error)
  
    );
 }
add(){
  this.showData=true
  console.log(this.showData)
}

 closeForm(){
  this.showData=false

 }

 onSubmit(myForm:any){
  console.log(myForm)
this.showData=false

 }

}

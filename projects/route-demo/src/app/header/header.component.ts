import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
name:string=''
someObservable= new Observable((a)=>{
  a.next("hellow WOrld")
  a.complete();
  
});
  constructor(private pr:ActivatedRoute){

  
    pr.queryParams.subscribe(
      a=>{
     this.name=a[0];
      },
 
    );
  }

}

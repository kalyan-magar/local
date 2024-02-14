import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formDemo';

  fun(f:any){
    f.setValue({
      passward:1234,
       userName:"kalyan", 
       myemail:"abc123@gmail.com"

    })
    console.log(f)
  
  }
  submit(){
    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  public count = 0;
  sub(){ 
    if(this.count>0)
    this.count--
  }
  add(e:Event){
    alert(e+ "this event is clicked")
   
this.count++
  }
  ref(){
this.count=0
  }


  // toggled example
isActive=false;
toggled(){
this.isActive=!this.isActive;
}

// key down event
keyd(e:KeyboardEvent){
  alert("key pressed")

}

}

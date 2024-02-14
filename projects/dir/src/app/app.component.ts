import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dir';
  name='kalyan';
  userAdmin=(this.name==='kalyan')?true:false;
  fun(){
    alert('HI Bro')
  }
}

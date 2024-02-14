import { Component } from '@angular/core';
import { DataArrayService } from '../data-array.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  oneWayDataBinding="hi Successful one way data binding";
// here DataArrayerviece is not ,but still home component uset it
  constructor(  public d:DataArrayService){

  }

}

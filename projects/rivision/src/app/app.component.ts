import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rivision';
  name:string="kalyan";
  id:number=10;
/*we are giving static data ,but when by API,in dom data will take form API
*/
  email:string="abc@gmail.com"
  isSunil=(this.name==="kalyan")?false:true;
  fail=true;
  color=(this.fail)?'danger':'success';
  isCenter=true;
  fun():object{
    const Obj={'center':this.isCenter,'danger':this.fail}
    return Obj;
  }
  c:string='brown'
  bgc:string='powderblue'
  result(e:Event){
    const evb = e.target as HTMLButtonElement
    alert(' I came from tempate my Name is " '+evb.type +evb.textContent +'" result show')
  }
}

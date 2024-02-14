import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
submittedData:any;
  submitForm(data:any){

    this.submittedData=data;
  }
  formData={
    name:'',
    email:'',
    password:''
  }

}

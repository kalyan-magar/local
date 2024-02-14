import { Component } from '@angular/core';
import { FormControl,FormGroup ,FormArrayName, Validators, FormBuilder, FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  

  constructor(private fb:FormBuilder){

    // this.myForm= this.fb.group({
    //   uname:new FormControl("",[Validators.required,Validators.email]),
    // passward:new FormControl("",[Validators.minLength(4)]),
    // })

  }
// first way 1
  // myForm=new FormGroup({
    // uname:new FormControl("",[Validators.required,Validators.email]),
    // passward:new FormControl("",[Validators.minLength(4)]),
    // email:new FormControl()
  // },[],[]);

  // second way 2
myForm= this.fb.group(
  {   
    // they all are go inside "myForm.controls" 
    uname:[null,[Validators.required,Validators.email,this.checkUpperCase ]],
    passward:[],
    names:this.fb.array([this.fb.control('')])
  }                

)

  checkUpperCase(control:FormControl){

    const pattern=/[A-z]/;
    console.log(control.value);
   if( !(pattern.test(control.value)))
   {
    return {UpperCaseError:true}
   }else {return false;}

  }
get names(){
  return this.myForm.controls.names as FormArray;
}
delete(i:any){
  this.myForm.controls.names.controls.splice(i,1)
}
add(){
  console.log("add metod called");
  this.myForm.controls.names.push(this.fb.control(''))
  console.log(this.myForm.controls.names);
}

// myForm= new FormArray([
//   new FormControl(),
//   new FormControl()
// ]);


  show(){

    // console.log(this.fb.array([new FormControl(),new FormControl()]))
    console.log(this.myForm );
    console.log( this.myForm.get("uname"))
  //  this.controls= this.myForm.controls.names

  }

submit(){

}
//***************************** */

}

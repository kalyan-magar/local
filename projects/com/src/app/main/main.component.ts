import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  message:string="hi i am child Main"
@Input() messageToChild:string ='';
@Input()   fruit:string='';
@Input() img:string='';
@Input() name:string=''
@Output()  newItemEvent= new EventEmitter();// it raises event 

addNewItem(val:string){
  console.log("before event triggerd we are in child addNewItem method ")
  this.newItemEvent.emit(val);
}


ngOnInit(): void {
    
}
constructor(){

}
}

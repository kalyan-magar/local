import { Component ,DoCheck,Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges,DoCheck {
  @Input() data:any;
  n:number=0;
  constructor(){

    console.log("i'm in constructor of header = "+(++this.n));
  }
  ngDoCheck(): void {
    console.log("do do do check  hedaer")

  }
  ngOnInit(){
    console.log("i'm in oninit of header")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changing in header")
    console.log(changes);
      
  }

}

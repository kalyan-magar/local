import { Component } from "@angular/core";
@Component({
    /* This @Component (Directive) tell everything about my component  
    and  then as Decorator concept,
     it will take all the detail in the name of MyComponent Class .
     */
    selector:'kalyan',
    template:'<a href=www.google.com>Google</a>',
    styles:['a{text-decoration:none}']

    
    
})
export class MyComponent{

}
import { Component } from '@angular/core';


@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:
  //Interpolation
  //Class Binding
  //ng class Directives
  //style binding
  //ng style directive
  //Event Binding
  `<div>
     <h2>Welcome {{name}}</h2><h2>{{2+1}}</h2>
     <p>{{name.length}}</p><p>{{name.toUpperCase()}}</p>
     <p>{{greetUser()}}</p>
     
    <h2 class="text-success">Vyshnavi</h2>
    <h2 [class]="successClass">Vyshnavi</h2>
    <h2 [class.text-danger]="hasError">Vyshnavi</h2>

    <h2 [ngClass]="messageClass">{{name}}</h2>
    <h2 [ngClass]="dangerous">{{name}}</h2>

    <h2 [style.color]="'orange'">{{name}}</h2>
    <h2 [style.color]="isSpecial ? 'pink' : 'violet'">{{name}}</h2>
    <h2 [style.color]="diffColor">{{name}}</h2>

    <h2 [ngStyle]="titleStyles">{{name}}</h2>

    <button (click)="onClick()">Greet</button>
    {{greeting}}
  </div>`,
  // styleUrls: ['./test.component.css']
  styles:[`
  .text-success{color:green;}
  .text-danger{color:red;}
  .text-special{font-style:italic;}
  .text-upper{text-transform:uppercase;}
  
  `]
})
export class TestComponent {
     public name="Vyshnavi";
     public myId="testId";
     public successClass="text-success";
     public hasError=false;
     public isSpecial=true;
     public diffColor="blue";
     public greeting="";
     public messageClass={
      "text-success":!this.hasError,
      "text-danger":this.hasError,
      "text-special":this.isSpecial

     }
     public dangerous={
      "text-danger":this.hasError,
      "text-upper": this.hasError
     }
     public titleStyles={
      color:"blue",
      fontStyle:"italic"
   }
   onClick(){
    this.greeting ="Hello "+this.name;
    console.log(event);
   }
    greetUser(){
      return "Hello "+this.name;
    }
}

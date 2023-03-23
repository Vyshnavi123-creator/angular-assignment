import { Component  ,
  ViewChild,  
  ElementRef,  
  ViewContainerRef, } from '@angular/core';
import { StoryBookComponent } from './story-book/story-book.component';
import { HorrorBookComponent } from './horror-book/horror-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dynamic-components';
  //@ViewChild :- provide a way to access and manipulate DOM elements, directives and components.
  @ViewChild('container', { read: ViewContainerRef })  
  container!: ViewContainerRef;  

  constructor(private viewContainerRef: ViewContainerRef) { }  
  addStoryBook(): void {  
    this.viewContainerRef.clear();
    const component = this.viewContainerRef.createComponent(StoryBookComponent);  
  } 

  addHorrorBook(): void {  
    this.viewContainerRef.clear();
    const component = this.viewContainerRef.createComponent(HorrorBookComponent);  
  } 
}

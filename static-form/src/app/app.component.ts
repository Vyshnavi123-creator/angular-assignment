import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=["Web development","App Development","Machine Learning"];
  userModel=new User('Vyshnavi','vyshnavi@gmail.com',8989888885,'Web development',true);
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryBookComponent } from './story-book/story-book.component';
import { HorrorBookComponent } from './horror-book/horror-book.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryBookComponent,
    HorrorBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

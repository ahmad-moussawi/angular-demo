import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

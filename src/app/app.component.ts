import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <clock></clock>
  <clock [hour]="10" [minute]="0"></clock>
  <clock [hour]="13" [minute]="30"></clock>
  <input type="date"> -->

  <todo></todo>
  `,
})
export class AppComponent {
  title = 'angular-demo';
}

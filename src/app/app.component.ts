import { Component } from '@angular/core';
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  template: `
    <app-log-in></app-log-in>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}

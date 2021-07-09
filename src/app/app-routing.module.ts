import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {LogInComponent} from "./log-in/log-in.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'log-in', component: LogInComponent}
    ]),
  ]
})
export class AppRoutingModule { }

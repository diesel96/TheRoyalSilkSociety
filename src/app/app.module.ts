import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { FirstBaseComponent } from './first-base/first-base.component';
import { MeetComponent } from './meet/meet.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    FirstBaseComponent,
    MeetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

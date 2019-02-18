import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Demo1Component } from './demo1/demo1.component';

import { FormsModule } from '@angular/Forms';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

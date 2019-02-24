import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Demo1Component } from './demo1/demo1.component';

import { FormsModule } from '@angular/Forms';
import { DevelopersComponent } from './developers/developers.component';
import { ProjectsComponent } from './projects/projects.component';
import { DevEditComponent } from './developers/dev-edit/dev-edit.component';
import { DevListComponent } from './developers/dev-list/dev-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    DevelopersComponent,
    ProjectsComponent,
    DevEditComponent,
    DevListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

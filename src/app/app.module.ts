import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

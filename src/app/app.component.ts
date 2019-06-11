import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 1)
  ];
  // selectedTask: Task = this.tasks[0];
  selectedTask = null;
  
  newTask = null;

  addTask(newTask){
    this.newTask = new Task("new task", 3);
    
    this.tasks.push(this.newTask);
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  priorityColor(currentTask){
    if(currentTask.priority === 3){
      return "bg-danger";
    } else if(currentTask.priority === 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
  finishedEditing() {
    this.selectedTask = null;
  }

  finishedAdding(){
    this.newTask = null;
  }
}


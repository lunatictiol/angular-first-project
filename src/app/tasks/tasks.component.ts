import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTask } from './task-model';
import { TaskService } from './tasks.service';
@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {

constructor(private taskService:TaskService){}

  @Input() name?: string
  tasks = dummyTasks

  @Input({required:true}) userId!:string

  isAddingTask = false;

  get selectedUserTask(){
    return this.taskService.getUserTasks(this.userId);
  }
  onCompleteTask(id:string){
    
  }
  addTask() {
      this.isAddingTask = true 
    }
    closeTask() {
      this.isAddingTask = false 
    }

    onAddTask(newTask:newTask) {
      
      this.isAddingTask = false
      }
}

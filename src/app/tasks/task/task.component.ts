import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task-model';

import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe,CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private taskService = inject(TaskService)
  @Input({required: true}) task!: Task;
  
  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  } 
}

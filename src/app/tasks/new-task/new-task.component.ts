import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../task-model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})


export class NewTaskComponent {
@Input({required:true}) userId!:string
private taskService = inject(TaskService)
@Output() close = new EventEmitter();

enteredTitle = ''
enteredSum = ''
enteredDate = ''

onCancel(){
  this.close.emit();
}
onSubmit() {
   this.taskService.addTask({
    title:this.enteredTitle,
    summary:this.enteredSum,
    dueDate:this.enteredDate
   },this.userId)
   this.close.emit();
  }
}

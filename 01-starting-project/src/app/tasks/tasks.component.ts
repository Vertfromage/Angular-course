import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { FormComponent } from "./form/form.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, FormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent { 
  @Input({required:true}) name!: string;
  @Input({required:true}) userId!: string;
  isAddingTask = false;
  
  // Dependency injection handled by Angular so there is only one
  constructor(private tasksService:TasksService){}
 
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask(){
    this.isAddingTask = true
  }

  onCloseAddTask(){
    this.isAddingTask=false
  }
}

import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output
} from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService); // injects a dependency

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

}

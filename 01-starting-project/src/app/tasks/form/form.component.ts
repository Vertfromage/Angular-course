import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'; // collection of features and directives to help with forms
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
// forms model automatically prevents default browser behavior and has a custom event
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  private tasksService = inject(TasksService) // injects a dependency

  onFormSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    }, this.userId)
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}

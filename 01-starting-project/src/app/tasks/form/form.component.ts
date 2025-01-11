import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'; // collection of features and directives to help with forms
import { type NewTaskData } from '../task/task.model';
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
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle='';
  enteredSummary='';
  enteredDate='';

  onFormSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    })
  }

  onCancel() {
    this.cancel.emit();
  }
}

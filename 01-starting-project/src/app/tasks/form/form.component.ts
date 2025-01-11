import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input({ required: true }) userId!: string;
  // @Output() complete = new EventEmitter<string>();
  
  // onCompleteForm() {
  //   this.complete.emit()
  // }
}

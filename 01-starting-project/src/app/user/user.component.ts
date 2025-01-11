import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>(); // type not required here but good for type safety
  // select = output<string>(); Alternative without decorators

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // event listener use like this onSelectUser() with brackets
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

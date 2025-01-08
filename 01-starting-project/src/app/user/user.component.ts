import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
  id:string;
  avatar:string
  name:string
}

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

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

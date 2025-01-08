import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex]; Basic way - zone.js 
  selectedUser = signal(DUMMY_USERS[randomIndex]) // new way signal - angular specific more efficient, more granular

  // old way needs getter
  // get imagePath() {
  //   // use like a property imagePath in template file
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // new signals way 
  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)

  // event listener use like this onSelectUser() with brackets
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex]; //old way
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}

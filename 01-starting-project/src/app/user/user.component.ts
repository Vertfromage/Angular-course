import { Component, computed, Input, input } from '@angular/core';
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
  // @Input({required:true}) avatar!: string; // ! means it will be set to a value
  // @Input({required:true}) name!: string;
  avatar = input.required<string>() // signal version of inputs
  name = input.required<string>() // input signals read only
  

  imagePath = computed(()=>'assets/users/' + this.avatar())

  
  // event listener use like this onSelectUser() with brackets
  onSelectUser() {
  }
}

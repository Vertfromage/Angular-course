import { Component, Input, input } from '@angular/core';
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
  // old way of inputs without signals will be present in many projects
  @Input({required:true}) avatar!: string; // ! means it will be set to a value
  @Input({required:true}) name!: string; 
  
  get imagePath(){
    return 'assets/users/' + this.avatar
  }
  
  // event listener use like this onSelectUser() with brackets
  onSelectUser() {
  }
}

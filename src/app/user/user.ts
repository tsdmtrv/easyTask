import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { UserType } from './user.model';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input({ required: true }) user!: UserType;

  //@Output() select = new EventEmitter();
  select = output<string>();

  get imagePath() {
    return '/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

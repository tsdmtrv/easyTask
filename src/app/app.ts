import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../headerComponent/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
@Component({
  imports: [RouterOutlet, HeaderComponent, User, Tasks, Task],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-custom-project');
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
}

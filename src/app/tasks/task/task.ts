import { Component, Input } from '@angular/core';
import { task } from './task.model';

@Component({
  imports: [],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  @Input({ required: true }) task!: task;
}

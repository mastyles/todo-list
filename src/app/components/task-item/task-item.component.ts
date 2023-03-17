import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskInterface } from 'src/app/TaskInterface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: TaskInterface;
  @Output() onDeleteEmitter: EventEmitter<TaskInterface> = new EventEmitter();
  @Output() onTaskReminderEmitter: EventEmitter<TaskInterface> = new EventEmitter();

  faTimes = faTimes;

  onDelete(task: TaskInterface) {
    this.onDeleteEmitter.emit(task);
  }

  toggleReminder(task: TaskInterface) {
    this.onTaskReminderEmitter.emit(task);
  }

}

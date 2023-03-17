import { Subscription } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { TaskInterface } from 'src/app/TaskInterface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() addTaskEmitter: EventEmitter<TaskInterface> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  addTask() {

    if(!this.text) {
      alert('Task can not be empty.');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.addTaskEmitter.emit(newTask);

    this.text = this.day = '';
    this.reminder = false;

  }

}

import { Component, Inject } from '@angular/core';
import { TaskInterface } from 'src/app/TaskInterface';
import { TaskService } from 'src/app/services/task.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})

export class TaskComponent {

  tasks: TaskInterface[] = [];

  constructor(@Inject(TaskService) private taskService: TaskService) {}

  ngOnInit(): void {

    // this.tasks = this.taskService.getTasks(); // w/o Observables

    this.taskService.getTasks().subscribe((tasks_sample) => {
      this.tasks = tasks_sample;
    });

  }

  // deleteTask(task) {
  //   console.log('parent task component: ');
  //   console.log(task);
  // }

  // with json-server:
  deleteTask(task: TaskInterface) {
    this.taskService.deleteTask(task).subscribe(() => (
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ));
  }

  toggleReminder(task: TaskInterface) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: TaskInterface) {
    this.taskService.addTask(task).subscribe((task) => (
      this.tasks.push(task)
    ));
  }

}

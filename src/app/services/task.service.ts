import { Injectable } from '@angular/core';
import { TaskInterface } from 'src/app/TaskInterface';
// import { TASKS_SAMPLE } from 'src/app/sample-tasks';
import { Observable /*, of*/ } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = 'http://localhost:5000/sample_tasks';

  constructor(private http: HttpClient) { }

  // getTasks(): TaskInterface[] {
  //   return TASKS_SAMPLE;
  // } // w/o Observables

  getTasks(): Observable<TaskInterface[]> {
    // const tasks_sample = of(TASKS_SAMPLE);
    // return tasks_sample;

    // with json-server:
    return this.http.get<TaskInterface[]>(this.apiURL);
  }

  deleteTask(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }

  updateTaskReminder(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }

  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.apiURL, task, httpOptions);
  }

}

import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = "To-Do List";
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}

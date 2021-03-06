import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API';
  tasks = [];
  task = [];

  constructor(private _httpService: HttpService){
    this.task = new Task();
}
  ngOnInit(){
    // this.getTasksFromService();
  }
  getTasksFromService(){
    var observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got data', data);
      this.tasks = data['tasks'];
    });
  };
   info(task) {
     this.task = task;
  }
}

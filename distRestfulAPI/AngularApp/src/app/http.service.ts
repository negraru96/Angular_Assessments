import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
}

getTasks(){
  // var tempObservable = this._http.get('/tasks');
  // tempObservable.subscribe(data => console.log('Got our tasks!', data));
  return this._http.get('/tasks')
}
createTasks(create) {
  var data = create;
  var tempObservable = this._http.post('tasks', data);
  tempObservable.subscribe(data => console.log('Created task!', data));
}
oneTasks(id) {
  var tempObservable = this._http.get('/tasks/' + id);
  tempObservable.subscribe(data => console.log('One task!', data));
}
deleteTasks(id) {
  var tempObservable = this._http.delete('/tasks/' + id);
  tempObservable.subscribe(data => console.log('Deleted task!', data));
}
updateTasks(id, data) {
  var tempObservable = this._http.patch('/tasks/' + id, data);
  tempObservable.subscribe(data => console.log('Updated task!', data));
}
}

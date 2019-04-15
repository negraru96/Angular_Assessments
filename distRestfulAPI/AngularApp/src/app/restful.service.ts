import { Injectable } from '@angular/core';
import { RestfulClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  constructor(private _restful: RestfulClient) {
    this.getTasks();
  }

  getTasks(){
    let temp = this._restful.get('/tasks');
    temp.subscribe(data => console.log('Got tasks', data));
  }
}

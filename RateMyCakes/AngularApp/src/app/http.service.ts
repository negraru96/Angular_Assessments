import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string[] = [];

  constructor() { }

  retrieveUrl(){
    return this.url;
  }
}

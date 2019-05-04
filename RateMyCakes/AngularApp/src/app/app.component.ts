import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate my Cakes';

  name: string[];

  url: string[];

  constructor(private _httpService: HttpService) {
   this.url = this._httpService.retrieveUrl();
   console.log(this.url);
 }

  ngOnInit(){

  }
}

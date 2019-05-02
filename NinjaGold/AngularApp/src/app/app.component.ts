import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';

  gold: number[];

  constructor(private _httpService: HttpService) {
    this.gold = this._httpService.retrieveGold();
    console.log(this.gold);
  }

  ngOnInit(){
    
  }
}

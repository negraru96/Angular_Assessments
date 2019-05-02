import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activity: string[] = this._httpService.activity
  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }
}

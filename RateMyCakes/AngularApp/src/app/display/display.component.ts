import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  display: string[] = this._httpService.display
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  farm() {
    var result;
    var newgold = this.random(1,4);
    this._httpService.incrementGold(newgold);
    result = `You've earned ${newgold} gold from the magic cash crop!`
    this._httpService.activity.push(result)
    console.log(this._httpService.activity)
  }

  cave() {
    var result;
    var newgold = this.random(-20,21);
    this._httpService.incrementGold(newgold);
    if(newgold > 0) {
    result = `You've earned ${newgold} gold from a rare artifact! Pffweew Safe and Sound!`
  } else {
    result = `You've been attacked by a wild animal and had to pay hospital expenses! Paid ${newgold} gold.`
  }
    this._httpService.activity.push(result)
  }

  house() {
    var result;
    var newgold = this.random(-5,6);
    this._httpService.incrementGold(newgold);
    if(newgold > 0) {
    result = `You sold acquired goods and earned ${newgold} gold!`
  } else {
    if(newgold < 6) {
    result= `You've been mugged by the restless homeless man living in the house! Lost ${newgold} gold.`
    }
  }
    this._httpService.activity.push(result)
  }

  casino() {
    var result;
    var newgold = this.random(-100,101);
    this._httpService.incrementGold(newgold);
    if(newgold > 0) {
      result = `You've earned ${newgold} gold at the Casino. Lucky you!`
    } else {
    result = `You've been robbed from the machines and lost ${newgold} gold at the Casino ):`
    }
    this._httpService.activity.push(result)
  }

  random(min, max){
    return(Math.floor(Math.random() * (min-max)) + max)
  }

  ngOnInit() {
  }

}

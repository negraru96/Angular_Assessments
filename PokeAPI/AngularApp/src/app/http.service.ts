import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getBulbasaur();
    this.getNumber();
    //passing url
  }
 getBulbasaur(){
   let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
   //data:any // any method for vague generalization - general API calls
   bulbasaur.subscribe((data:any) => {
   //ES6 Angular Syntax ${} data
   console.log(`${data.name}'s ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name} .`);
 });
};

getNumber() {
  let overgrow = this._http.get('https://pokeapi.co/api/v2/ability/65');
  //Target new url => specific ability
  overgrow.subscribe((data:any) => {
    console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability `);
    //Target pokemon w/ same abilities in url
  });
};

};

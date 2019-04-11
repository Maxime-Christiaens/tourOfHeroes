import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: any = [ {id:"0", name: "marco"}  ,{id:"1", name: "polo"}, {id:"2", name: "petit bichon"}, {id:"3", name: "gros bichon"}, {id:"4", name: "rick"}, {id:"5", name: "morty"} ]
  selectedHero: any;

  constructor() { }

  setHero(hero: any): void {
    this.selectedHero = hero;
  }

  getAndSetHero(hero: any): any {
    this.setHero(hero);
    return this.selectedHero;
  }
}

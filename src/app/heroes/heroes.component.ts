import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	title: string = "My Heroes";
	heroes: any;
	myHero: string;
	displayHero: boolean = false;

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.heroes = this.heroService.heroes;
	}

	getMyHero(index: number): void {
		this.myHero = this.heroService.getAndSetHero(this.heroes[index]);
	}
	
	displayDetail() {
		this.displayHero = !this.displayHero;
	}
}

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroes: any;
  myHeroID: number;
  myHero: any;

  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.heroes;
    this.myHeroID = this.route.snapshot.params['id'];
    this.myHero = this.heroService.getAndSetHero(this.heroes[this.myHeroID]);
  }
}

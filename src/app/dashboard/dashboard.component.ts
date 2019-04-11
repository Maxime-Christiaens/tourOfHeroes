import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string = "Dashboard of Hero";
  heroes: any;

  constructor(private heroService: HeroService) { 
    this.heroes = this.heroService.heroes;
   }

  ngOnInit() {
  }

  getHeroes(limit: number): any[] {
    return this.heroes.filter((hero, index) => {
      if (index < limit) {
        return hero;
      }
    });
  }

}

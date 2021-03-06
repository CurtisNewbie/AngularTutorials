import { Component, OnInit } from "@angular/core";
import { Hero } from "../heroes/hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  // number of heroes displayed
  TOP: number = 5;
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getTop();
  }

  getTop(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.slice(0, this.TOP);
    });
  }
}

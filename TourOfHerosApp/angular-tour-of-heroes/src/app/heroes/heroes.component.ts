import { Component, OnInit } from "@angular/core";
// always imports Component from core lib
import { Hero } from "./hero";
import { HeroService } from "../hero.service";

@Component({
  // this component's CSS element selector
  selector: "app-heroes",
  // the location of the component's template file
  templateUrl: "./heroes.component.html",
  // the location of the component's private CSS styles
  styleUrls: ["./heroes.component.css"]
})

// always export class so it can be used elsewhere
export class HeroesComponent implements OnInit {
  // hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  // dependency injection
  constructor(private heroService: HeroService) {
    // this.hero = { id: 1, name: "Windstorm", description: "" };
  }

  // lifecycle hook/ callback
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(id, hero) {
    if (this.selectedHero !== hero) {
      console.log("Selected " + id);
      this.selectedHero = hero;
    }
  }

  // async way to get (mock) data
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  /*
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      function(heroes) {
        this.heroes = heroes;
      }.bind(this)
    );
  }
  */
}

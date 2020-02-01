import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../heroes/hero";
// get route
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  // this object is binded to the parent component of this component, i.e., this object is from parent component
  // @Input() hero: Hero;

  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // get path param
    const id = this.route.snapshot.paramMap.get("id");
    this.heroService.getHeroById(parseInt(id)).subscribe(h => {
      this.hero = h;
    });
  }

  goBack(): void {
    // go back in history to the previous route
    this.location.back();
  }
}

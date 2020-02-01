import { Injectable } from "@angular/core";
// import mock-datasource
import { HEROES } from "./mock-heroes";
import { Hero } from "./heroes/hero";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  LOG_NAME: string = "[HeroService]";

  constructor(private msgService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // sync operation
    // return HEROES;
    // -------------
    // async operation
    this.msgService.addMessage(this.LOG_NAME + " fetched heroes");
    return of(HEROES);
  }

  getHeroById(id: number): Observable<Hero> {
    this.msgService.addMessage(this.LOG_NAME + ` fetch hero by id: ${id}`);
    return of(HEROES.find(h => h.id === id));
  }
}

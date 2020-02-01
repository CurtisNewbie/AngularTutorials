import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from "./messages/messages.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
// Imports FormsModule for two-way binding
import { FormsModule } from "@angular/forms";
// custom module that handles routing
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

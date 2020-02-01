import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

// routes
const ROUTES: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "hero/detail/:id", component: HeroDetailComponent }
];

@NgModule({
  // imports RouterModule and Routes so the app can have routing functionality.
  imports: [RouterModule.forRoot(ROUTES)],
  // exports RouterModule so it will be available throughout the app.
  exports: [RouterModule]
})
export class AppRoutingModule {}

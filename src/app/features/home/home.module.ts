import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { LatestsResultsComponent } from './components/latests-results/latests-results.component';
import { NextRacesComponent } from './components/next-races/next-races.component';
import { DriverStadingsComponent } from './components/driver-stadings/driver-stadings.component';
import { TeamStadingsComponent } from './components/team-stadings/team-stadings.component';



@NgModule({
  declarations: [
    HomeComponent,
    LatestsResultsComponent,
    NextRacesComponent,
    DriverStadingsComponent,
    TeamStadingsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

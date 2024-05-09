import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { TeamInformationsComponent } from './components/team-informations/team-informations.component';
import { TeamResultsComponent } from './components/team-results/team-results.component';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamDetailsComponent,
    TeamInformationsComponent,
    TeamResultsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }

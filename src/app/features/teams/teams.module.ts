import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamDetailsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }

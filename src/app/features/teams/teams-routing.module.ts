import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TeamsComponent },
      { path: ':constructorId', component: TeamDetailsComponent }
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
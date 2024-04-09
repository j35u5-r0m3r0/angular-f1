import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './pages/history/history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryDriversListComponent } from './components/history-drivers-list/history-drivers-list.component';
import { HistoryTeamsListComponent } from './components/history-teams-list/history-teams-list.component';
import { HistoryScheludeListComponent } from './components/history-schelude-list/history-schelude-list.component';



@NgModule({
  declarations: [
    HistoryComponent,
    HistoryDriversListComponent,
    HistoryTeamsListComponent,
    HistoryScheludeListComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheludeRoutingModule } from './schelude-routing.module';
import { ScheludeComponent } from './pages/schelude/schelude.component';
import { ScheludeUpcomingListComponent } from './components/schelude-upcoming-list/schelude-upcoming-list.component';
import { ScheludePastListComponent } from './components/schelude-past-list/schelude-past-list.component';


@NgModule({
  declarations: [
    ScheludeComponent,
    ScheludeUpcomingListComponent,
    ScheludePastListComponent
  ],
  imports: [
    CommonModule,
    ScheludeRoutingModule
  ]
})
export class ScheludeModule { }

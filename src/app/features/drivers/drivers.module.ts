import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriverDetailsComponent } from './pages/driver-details/driver-details.component';
import { DriverInformationsComponent } from './components/driver-informations/driver-informations.component';
import { DriverResultsComponent } from './components/driver-results/driver-results.component';



@NgModule({
  declarations: [
    DriversComponent,
    DriverDetailsComponent,
    DriverInformationsComponent,
    DriverResultsComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriverDetailsComponent } from './pages/driver-details/driver-details.component';



@NgModule({
  declarations: [
    DriversComponent,
    DriverDetailsComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule { }

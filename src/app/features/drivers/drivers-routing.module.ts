import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriverDetailsComponent } from './pages/driver-details/driver-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DriversComponent },
      { path: ':constructorId', component: DriverDetailsComponent }
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
export class DriversRoutingModule { }
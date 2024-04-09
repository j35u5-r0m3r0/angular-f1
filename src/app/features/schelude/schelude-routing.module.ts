import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheludeComponent } from './pages/schelude/schelude.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: ScheludeComponent }],
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
export class ScheludeRoutingModule { }

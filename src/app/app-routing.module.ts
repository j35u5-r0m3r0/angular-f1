import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'schelude',
    loadChildren: () =>
      import('./features/schelude/schelude.module').then((m) => m.ScheludeModule)
  },
  {
    path:'drivers',
    loadChildren: () =>
      import('./features/drivers/drivers.module').then((m) => m.DriversModule)
  },
  {
    path:'teams',
    loadChildren: () =>
      import('./features/teams/teams.module').then((m) => m.TeamsModule)
  },
  {
    path:'history',
    loadChildren: () =>
      import('./features/history/history.module').then((m) => m.HistoryModule)
  },
  {
    path:'',
    loadChildren: () =>
      import('./features/welcome/welcome.module').then((m) => m.WelcomeModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

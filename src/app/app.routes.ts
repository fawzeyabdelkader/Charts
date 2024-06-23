import { Routes } from '@angular/router';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ChartsComponent } from './Components/charts/charts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'charts', pathMatch: 'full' },
  { path: 'charts', component:ChartsComponent, title: 'charts  ' },
  { path: '**', component:NotfoundComponent, title: 'Not Found' },
];

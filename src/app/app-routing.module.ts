import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./+start/start.module').then(m => m.StartModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./+maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./+pages/pages.module').then(m => m.PagesModule)
  },
/*  {
    path: ':city',
    component: MainMapsNavigateComponent,
    loadChildren: './+maps/maps.module#MapsModule'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartIndexComponent } from './start-index/start-index.component';
import { StartShortInfoComponent } from './start-short-info/start-short-info.component';

const routes: Routes = [
  {
    path: '',
    component: StartIndexComponent,
  },
  {
    path: 'info',
    component: StartShortInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }

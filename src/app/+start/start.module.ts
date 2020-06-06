import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { StartRoutingModule } from './start-routing.module';

import { StartIndexComponent } from './start-index/start-index.component';
import { StartTopSideComponent } from './components/start-top-side/start-top-side.component';
import { StartBottomSideComponent } from './components/start-bottom-side/start-bottom-side.component';

@NgModule({
  declarations: [StartIndexComponent, StartTopSideComponent, StartBottomSideComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    MatButtonModule
  ]
})
export class StartModule { }

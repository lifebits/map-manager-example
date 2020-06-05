import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { StartRoutingModule } from './start-routing.module';

import { StartIndexComponent } from './start-index/start-index.component';

@NgModule({
  declarations: [StartIndexComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    MatButtonModule
  ]
})
export class StartModule { }

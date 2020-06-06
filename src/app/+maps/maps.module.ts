import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { UserAggregatorModule } from '../user-aggregator/user-aggregator.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    UserAggregatorModule
  ]
})
export class MapsModule { }

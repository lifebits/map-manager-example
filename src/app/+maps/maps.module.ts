import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { UserAggregatorModule } from '../user-aggregator/user-aggregator.module';
import { MapComponent } from './map/map.component';

import { AngularYandexMapsModule, IConfig } from 'angular8-yandex-maps';
const mapConfig: IConfig = {
  apiKey: 'API_KEY',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    UserAggregatorModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ]
})
export class MapsModule { }

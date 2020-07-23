import { Injectable } from '@angular/core';

import { Observable, forkJoin } from "rxjs";
import { map } from 'rxjs/operators';

import { MapsGoogleService } from './maps-google.service';
import { MapsYandexService } from './maps-yandex.service';

export interface MapInitConfiguration {
  center: { lat: number, lng: number },
  zoom: number,
}

export interface MapMarker {
  id: number; x: number; y: number; label: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsManagerService {

  activeMapService: 'yandex' | 'google' = 'google';

  constructor(
    private mapsGoogleService: MapsGoogleService,
    private mapsYandexService: MapsYandexService) {
  }

  initMap(config: MapInitConfiguration) {
    return (this.activeMapService === 'yandex')
      ? this.initMapYandex(config)
      : this.initMapGoogle(config);
  }

  initMapGoogle(config: MapInitConfiguration): Observable<any> {
    return forkJoin([
      this.mapsGoogleService.initScript(),
      this.mapsGoogleService.initMapClusterScript()
    ]).pipe(
      map(([mapSdk]) => this.mapsGoogleService.createMap(mapSdk, config))
    );
  }

  initMapYandex(config: MapInitConfiguration): Observable<any> {
    return this.mapsYandexService.initScript().pipe(
      map(sdk => this.mapsYandexService.createMap(sdk, config))
    );
  }

  createMapCluster(map, pointList: Array<MapMarker>) {
    return (this.activeMapService === 'yandex')
      ? this.mapsYandexService.createCluster(map, pointList)
      : this.mapsGoogleService.createCluster(map, pointList);
  }

  prepareMarkerModel(model: any): MapMarker {
    return {
      id: model.id || null,
      x: model.x || null,
      y: model.y || null,
      label: model.label || 'Label'
    }
  }

}

import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { MapsGoogleService } from './maps-google.service';
import { MapsYandexService } from './maps-yandex.service';

// import { MapOptionsConfig } from "./maps.interface";

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  map: any;

  mapIsCreated = false;

  constructor(
    private mapsGoogleService: MapsGoogleService,
    private mapsYandexService: MapsYandexService) {
  }

  initGoogleMap(): Promise<any> {
    return Promise.all([
      this.mapsGoogleService.loadAPI()
    ])
      .then(result => {
        const mapsApi = result[0]['maps'];
        const mapsOptions = Object.assign(this.mapsGoogleService.defaultMapsOptions, {
          mapTypeControlOptions: {
            style: mapsApi.MapTypeControlStyle.DEFAULT,
            position: mapsApi.ControlPosition.TOP_RIGHT
          }
        });
        this.map = new mapsApi.Map(document.getElementById('map'), mapsOptions);
        this.mapIsCreated = true;
        console.log('INIT', { result, mapsOptions });
        console.log(document.getElementById('map'));
      })
  }

  initMapYandex() {
    return this.mapsYandexService.initScript().pipe(
      first()
    );
  }

}

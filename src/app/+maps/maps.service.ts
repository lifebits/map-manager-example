import { Injectable } from '@angular/core';

import { MapsGoogleService } from './maps-google.service';
import { MapOptionsConfig } from "./maps.interface";

@Injectable({
  providedIn: 'root'
})
export class MapsService extends MapsGoogleService {

  map: any;

  mapIsCreated = false;

  constructor() {
    super();
  }

  initMap(): Promise<any> {
    return Promise.all([
      this.loadAPI()
    ])
      .then(result => {
        const mapsApi = result[0]['maps'];
        const mapsOptions = Object.assign(this.defaultMapsOptions, {
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

}

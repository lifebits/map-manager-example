import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { fromEvent, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { MapInitConfiguration, MapMarker } from './maps-manager.service';

const API_LANG = 'ru_RU';
const API_KEY = 'AIzaSyAcuLH_XAAW8Ggg-9YN_Y_8QYcYp0Qa5fU';
const API_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&language=${API_LANG}`;
const MARKER_CLUSTER_URL = 'https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js'

@Injectable({
  providedIn: 'root'
})
export class MapsGoogleService {

  private mapSDK;
  private mapClusterSDK;

  private static renderMapScript(document: Document) {
    console.log('Render Google Map Script..');
    const node = document.createElement('script');
    node.async = true;
    node.src = API_URL;
    node.type = 'text/javascript';
    return document.getElementsByTagName('head')[0].appendChild(node);
  }

  private static getMapScript(window: Window) {
    return window['google'].maps;
  }

  private static renderMapClusterScript(document: Document) {
    const node = document.createElement('script');
    node.async = true;
    node.src = MARKER_CLUSTER_URL;
    node.type = 'text/javascript';
    return document.getElementsByTagName('head')[0].appendChild(node);
  }

  private static getMapClusterScript(window: Window) {
    return window['MarkerClusterer'];
  }

  constructor(
    @Inject(DOCUMENT) private document: Document) {
  }

  initScript() {
    return fromEvent(MapsGoogleService.renderMapScript(this.document), 'load').pipe(
      first(),
      map(() => MapsGoogleService.getMapScript(window)),
      map(sdk => this.setMapSDK(sdk))
    )
  }

  private setMapSDK(sdk): any {
    this.mapSDK = sdk;
    return sdk;
  }

  createMap(sdk, options: MapInitConfiguration): typeof sdk.Map {
    const mapsOptions = Object.assign(options, {
      mapTypeControlOptions: {
        style: sdk.MapTypeControlStyle.DEFAULT,
        position: sdk.ControlPosition.TOP_RIGHT
      }
    });
    return new sdk.Map(document.getElementById('map'), mapsOptions);
  }

  initMapClusterScript(): Observable<any> {
    return fromEvent(MapsGoogleService.renderMapClusterScript(this.document), 'load').pipe(
      first(),
      map(() => MapsGoogleService.getMapClusterScript(window)),
      map(sdk => this.setMapClusterSDK(sdk)),
    )
  }

  private setMapClusterSDK(sdk) {
    this.mapClusterSDK = sdk;
    return sdk;
  }

  createCluster(map, pointList: Array<MapMarker>) {
    return new this.mapClusterSDK(
      map,
      pointList.map(point => this.getMapMarker(point)),
      { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }
    );
  }

  getMapMarker(point: MapMarker) {
    return new this.mapSDK.Marker({
      position: { lat: point.x, lng: point.y },
      label: point.label
    });
  }

  // public setMarkerCluster(map, markers) {
  //   let options = {
  //     imagePath: 'assets/icon/maps/m',
  //     gridSize: 50,
  //   };
  //   return new MarkerCluster(map, markers, options);
  // }


  // protected clearMarkers(markers: any[]): void {
  //   this.setMapOnAll(null, markers);
  // }
  //
  // protected showMarkers(map: any, markers: any[]): void {
  //   this.setMapOnAll(map, markers);
  // }
  //
  // protected clearMarkersAndClusterer(markerClusterer): void {
  //   markerClusterer.clearMarkers();
  // }
  //
  // private setMapOnAll(map: any, markers: any[]): void {
  //   markers.forEach(marker => {
  //     marker.setMap(map);
  //   });
  // }

}


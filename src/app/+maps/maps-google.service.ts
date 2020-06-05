import { Injectable } from '@angular/core';
import { GoogleAPI, MapOptionsConfig, MapPoint } from './maps.interface';

// import * as MarkerCluster from 'node-js-marker-clusterer';

const API_INIT = 'onMapApiLoaded';
const API_KEY = 'AIzaSyAcuLH_XAAW8Ggg-9YN_Y_8QYcYp0Qa5fU';
const API_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&language=ru&callback=${API_INIT}`;

@Injectable({
  providedIn: 'root'
})
export class MapsGoogleService {

  googleAPI: GoogleAPI;

  protected defaultMapsOptions: MapOptionsConfig = {
    // 50.7775672,86.6954942
    center: { lat: 50.7775672, lng: 86.6954942},
    zoom: 8,
    scrollwheel: true
  };

  private static loadScript(): void {
    console.log('Loading Map API..');
    let node = document.createElement('script');
    node.async = true;
    node.src = API_URL;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  constructor() {}

  public addMarkers(map, pointList: MapPoint[], markerClickEvent?: Function) {
    let markers: any[] = [];
    pointList.forEach(place => {
      let marker = new this.googleAPI.maps.Marker({
        position: { lat: place.latitude, lng: place.longitude },
        map: map,
        title: place.city,
        icon: `assets/maps/map-marker.png`,
        // icon: `assets/icon/maps/${this.getMarkerIcon(place.population)}.png`,
        // animation: this.googleAPI.maps.Animation.DROP,
        item: {
          location: place.city.toLowerCase().replace(/\s/g, ''),
          state: place.state,
          rank: place.rank
        }
      });

      if (markerClickEvent) {
        marker.addListener('click', function() {
          markerClickEvent(this);
        });
      }

      markers.push(marker);
    });

    return markers;
  }

  // public setMarkerCluster(map, markers) {
  //   let options = {
  //     imagePath: 'assets/icon/maps/m',
  //     gridSize: 50,
  //   };
  //   return new MarkerCluster(map, markers, options);
  // }

  protected clearMarkers(markers: any[]): void {
    this.setMapOnAll(null, markers);
  }

  protected showMarkers(map: any, markers: any[]): void {
    this.setMapOnAll(map, markers);
  }

  protected clearMarkersAndClusterer(markerClusterer): void {
    markerClusterer.clearMarkers();
  }

  private setMapOnAll(map: any, markers: any[]): void {
    markers.forEach(marker => {
      marker.setMap(map);
    });
  }

  protected loadAPI(): Promise<any> {
    return new Promise(resolve => {
      window[API_INIT] = () => {
        console.log('google maps API loaded');
        this.googleAPI = window['google'];
        resolve(this.googleAPI);
        delete window[API_INIT];
      };
      MapsGoogleService.loadScript();
    })
  }

}

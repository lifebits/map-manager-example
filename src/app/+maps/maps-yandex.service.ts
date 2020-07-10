import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { from, fromEvent, Observable } from 'rxjs';
import { switchMap, map, first } from 'rxjs/operators'

import { MapInitConfiguration, MapMarker } from './maps-manager.service';

import * as yandexMap from "yandex-maps";
import { Map } from 'yandex-maps';

const API_KEY = 'acae57c6-add1-41a2-8be7-673465ecfda7';
const API_URL = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=${API_KEY}`;

export interface IConfig {
  apiKey: string;
  lang: 'ru_RU' | 'en_US' | 'en_RU' | 'ru_UA' | 'uk_UA' | 'tr_TR';
  coordorder?: 'latlong' | 'longlat';
  load?: string;
  mode?: 'release' | 'debug';
}

interface YandexObjectManager {
  type: "FeatureCollection";
  features: YandexObjectManagerMarker[];
}

interface YandexObjectManagerMarker {
  type: 'Feature';
  id: number;
  geometry: {
    type: 'Point';
    coordinates: [ number, number ];
    properties: {
      balloonContentHeader: string;
      balloonContentBody: string;
      balloonContentFooter: string;
      clusterCaption: string;
      hintContent: string;
    };
  };
}

type YandexMap = typeof yandexMap & {
  ObjectManager: any;
}

@Injectable({
  providedIn: 'root'
})
export class MapsYandexService {

  private yandexSDK!: YandexMap;

  private static renderMapScript(document: Document): HTMLScriptElement {
    console.log('Render Yandex Map Script..');
    const node = document.createElement('script');
    node.async = true;
    node.src = API_URL;
    node.type = 'text/javascript';
    return document.getElementsByTagName('head')[0].appendChild(node);
  }

  private static getMapScript(window: Window): Observable<YandexMap> {
    return from(window['ymaps'].ready()) as Observable<YandexMap>;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document) {
  }

  initScript(): Observable<YandexMap> {
    return fromEvent(MapsYandexService.renderMapScript(this.document), 'load').pipe(
      first(),
      switchMap(() => MapsYandexService.getMapScript(window)),
      map(sdk => this.setMapSDK(sdk))
    )
  }

  setMapSDK(sdk: YandexMap): YandexMap {
    this.yandexSDK = sdk;
    return sdk;
  }

  createMap(sdk: YandexMap, options: MapInitConfiguration): Map {
    return new sdk.Map(
      'map',
      {
        center: [ options.center.lat, options.center.lng ],
        zoom: options.zoom
      },
      {
        // searchControlProvider: 'yandex#search'
      }
    );
  }

  createCluster(map: Map, pointList: Array<MapMarker>): typeof map.geoObjects {
    const markerList = this.getObjectManagerData(pointList);
    const mapCluster = this.createObjectManager();
    mapCluster.objects.options.set('preset', 'islands#greenDotIcon');
    mapCluster.clusters.options.set('preset', 'islands#greenClusterIcons');
    mapCluster.add(markerList);
    return map.geoObjects.add(mapCluster);
  }

  createObjectManager() {
    return new this.yandexSDK.ObjectManager({
      clusterize: true,
      gridSize: 50,
      clusterDisableClickZoom: true
    });
  }

  getObjectManagerData(pointList: Array<MapMarker>): YandexObjectManager {
    return {
      type: "FeatureCollection",
      features: pointList.map(point => {
        return {
          type: 'Feature',
          id: point.id,
          geometry: {
            type: 'Point',
            coordinates: [ point.x, point.y ],
            properties: {
              balloonContentHeader: '111',
              balloonContentBody: '222',
              balloonContentFooter: '333',
              clusterCaption: '444',
              hintContent: '555',
            }
          }
        }
      })
    };
  }

}

import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, tap, switchMap } from "rxjs/operators";

import { MapsService } from '../maps.service';
import { TaskService } from '../../services/task/task.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  aggregatorIsOpen = true;

  constructor(
    private map: MapsService,
    private tasks: TaskService) {
  }

  ngOnInit(): void {
    let yandexMap;
    forkJoin([
      this.map.initMapYandex().pipe(
        tap(ymaps => yandexMap = ymaps),
        map(ymaps => {
          return new ymaps
            .Map('map', {
              center: [ 52.129671, 82.530013 ],
              zoom: 7
            }, {
              searchControlProvider: 'yandex#search'
            });
        })
      ),
      this.tasks.getTaskMarkerList().pipe(
        map(markerList => {
          return {
            type: "FeatureCollection",
            features: markerList.map(marker => {
              return {
                type: 'Feature',
                id: marker.id,
                geometry: {
                  type: 'Point',
                  coordinates: [ marker.x, marker.y ],
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
        })
      )
    ])
      .subscribe(([myMap, taskList]) => {
        const objectManager = new yandexMap.ObjectManager({
          clusterize: true,
          gridSize: 50,
          clusterDisableClickZoom: true
        });
        objectManager.objects.options.set('preset', 'islands#greenDotIcon');
        objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');

        myMap.geoObjects.add(objectManager);
        objectManager.add(taskList);

        /*taskList.forEach(task => {
          myMap.geoObjects.add(new yandexMap.Placemark([ task.x, task.y ]), {
            balloonContent: task.title
          }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
          })}
        );*/
      });
  }

  onCloseAggregator() {
    this.aggregatorIsOpen = false;
  }

}

interface YandexObjectManager {
  type: "FeatureCollection";
  features: YandexMarker[];
}

interface YandexMarker {
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

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
              center: [ 50.7775672, 86.6954942 ],
              zoom: 8
            }, {
              searchControlProvider: 'yandex#search'
            });
        })
      ),
      this.tasks.getTaskMarkerList()
    ])
      .subscribe(([myMap, taskList]) => {
        taskList.forEach(task => {
          myMap.geoObjects.add(new yandexMap.Placemark([ task.x, task.y ]), {
            balloonContent: task.title
          }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
          })}
        );
      });
  }

  onCloseAggregator() {
    this.aggregatorIsOpen = false;
  }

}

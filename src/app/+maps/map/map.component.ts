import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, concatAll, toArray } from "rxjs/operators";

import { MapInitConfiguration, MapsManagerService, MapMarker } from '../maps-manager.service';
import { TaskService } from '../../services/task/task.service';

const MAP_CONFIGURATION: MapInitConfiguration = {
  center: { lat: 52.129671, lng: 82.530013 },
  zoom: 7,
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  aggregatorIsOpen = true;

  constructor(
    private maps: MapsManagerService,
    private tasks: TaskService) {
  }

  ngOnInit(): void {
    this.initMap(MAP_CONFIGURATION)
      .subscribe(([myMap, markerList]) => {
        this.maps.createMapCluster(myMap, markerList);
      });
  }

  private initMap(config: MapInitConfiguration): Observable<[ any, MapMarker[] ]> {
    return forkJoin([
      this.maps.initMap(config),
      this.tasks.getTaskMarkerList(1000).pipe(
        concatAll(),
        map(point => this.maps.prepareMarkerModel(point)),
        toArray()
      )
    ])
  }

  onCloseAggregator() {
    this.aggregatorIsOpen = false;
  }

}

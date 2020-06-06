import { Component, OnInit } from '@angular/core';

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
    // this.map.initMap()

    this.tasks.getTaskList()
      .subscribe(val => console.log(val));
  }

  onCloseAggregator() {
    this.aggregatorIsOpen = false;
  }

}

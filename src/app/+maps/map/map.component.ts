import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  aggregatorIsOpen = true;

  constructor(private map: MapsService) { }

  ngOnInit(): void {
    // this.map.initMap()
  }

  onCloseAggregator() {
    this.aggregatorIsOpen = false;
  }

}

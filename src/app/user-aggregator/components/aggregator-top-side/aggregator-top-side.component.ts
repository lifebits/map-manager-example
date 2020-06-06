import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aggregator-top-side',
  templateUrl: './aggregator-top-side.component.html',
  styleUrls: ['./aggregator-top-side.component.scss']
})
export class AggregatorTopSideComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit(true);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-aggregator',
  templateUrl: './user-aggregator.component.html',
  styleUrls: ['./user-aggregator.component.scss']
})
export class UserAggregatorComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit(true);
  }

}

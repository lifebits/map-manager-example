import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const NEWS_BLOCK_2 = [
  {
    tag: '',
    title: '',
    description: '',
    footer: {
      userName: 'Татьяна',
      data: '1 июня 2020',
      viewCount: '11к',
      msgCount: '1001',
    }
  }
];

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

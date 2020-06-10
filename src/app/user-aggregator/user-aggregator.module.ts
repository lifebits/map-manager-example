import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { UserAggregatorComponent } from './user-aggregator/user-aggregator.component';
import { AggregatorTopSideComponent } from './components/aggregator-top-side/aggregator-top-side.component';
import { AggregatorTagViewerComponent } from './components/aggregator-tag-viewer/aggregator-tag-viewer.component';
import { AggregatorFilterNavComponent } from './components/aggregator-filter-nav/aggregator-filter-nav.component';
import { AggregationNewsBaseComponent } from './components/aggregation-news-base/aggregation-news-base.component';
import { AggregationNewsCardsComponent } from './components/aggregation-news-cards/aggregation-news-cards.component';


@NgModule({
  declarations: [
    UserAggregatorComponent,
    AggregatorTopSideComponent,
    AggregatorTagViewerComponent,
    AggregatorFilterNavComponent,
    AggregationNewsBaseComponent,
    AggregationNewsCardsComponent
  ],
  exports: [
    UserAggregatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ]
})
export class UserAggregatorModule { }

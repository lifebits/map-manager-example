import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { UserAggregatorComponent } from './user-aggregator/user-aggregator.component';
import { AggregatorTopSideComponent } from './components/aggregator-top-side/aggregator-top-side.component';
import { AggregatorTagViewerComponent } from './components/aggregator-tag-viewer/aggregator-tag-viewer.component';
import { AggregatorFilterNavComponent } from './components/aggregator-filter-nav/aggregator-filter-nav.component';
import { AggregaationNewsBaseComponent } from './components/aggregaation-news-base/aggregaation-news-base.component';


@NgModule({
  declarations: [UserAggregatorComponent, AggregatorTopSideComponent, AggregatorTagViewerComponent, AggregatorFilterNavComponent, AggregaationNewsBaseComponent],
  exports: [
    UserAggregatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ]
})
export class UserAggregatorModule { }

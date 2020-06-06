import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAggregatorComponent } from './user-aggregator/user-aggregator.component';
import { AggregatorTopSideComponent } from './components/aggregator-top-side/aggregator-top-side.component';



@NgModule({
  declarations: [UserAggregatorComponent, AggregatorTopSideComponent],
  exports: [
    UserAggregatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserAggregatorModule { }

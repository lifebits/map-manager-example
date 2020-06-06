import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatorTopSideComponent } from './aggregator-top-side.component';

describe('AggregatorTopSideComponent', () => {
  let component: AggregatorTopSideComponent;
  let fixture: ComponentFixture<AggregatorTopSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregatorTopSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregatorTopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

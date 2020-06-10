import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregationNewsCardsComponent } from './aggregation-news-cards.component';

describe('AggregationNewsCardsComponent', () => {
  let component: AggregationNewsCardsComponent;
  let fixture: ComponentFixture<AggregationNewsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregationNewsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregationNewsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

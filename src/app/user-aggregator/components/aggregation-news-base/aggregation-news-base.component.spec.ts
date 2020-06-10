import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregationNewsBaseComponent } from './aggregaation-news-base.component';

describe('AggregaationNewsBaseComponent', () => {
  let component: AggregationNewsBaseComponent;
  let fixture: ComponentFixture<AggregationNewsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregationNewsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregationNewsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

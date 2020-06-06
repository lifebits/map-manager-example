import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatorTagViewerComponent } from './aggregator-tag-viewer.component';

describe('AggregatorTagViewerComponent', () => {
  let component: AggregatorTagViewerComponent;
  let fixture: ComponentFixture<AggregatorTagViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregatorTagViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregatorTagViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

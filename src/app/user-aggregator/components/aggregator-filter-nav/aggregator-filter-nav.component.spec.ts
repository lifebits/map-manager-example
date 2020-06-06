import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatorFilterNavComponent } from './aggregator-filter-nav.component';

describe('AggregatorFilterNavComponent', () => {
  let component: AggregatorFilterNavComponent;
  let fixture: ComponentFixture<AggregatorFilterNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregatorFilterNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregatorFilterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

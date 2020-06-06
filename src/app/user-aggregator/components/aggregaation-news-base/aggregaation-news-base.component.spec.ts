import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregaationNewsBaseComponent } from './aggregaation-news-base.component';

describe('AggregaationNewsBaseComponent', () => {
  let component: AggregaationNewsBaseComponent;
  let fixture: ComponentFixture<AggregaationNewsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregaationNewsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregaationNewsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartShortInfoComponent } from './start-short-info.component';

describe('StartShortInfoComponent', () => {
  let component: StartShortInfoComponent;
  let fixture: ComponentFixture<StartShortInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartShortInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartShortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

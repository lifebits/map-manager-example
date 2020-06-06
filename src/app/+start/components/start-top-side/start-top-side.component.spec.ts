import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTopSideComponent } from './start-top-side.component';

describe('StartTopSideComponent', () => {
  let component: StartTopSideComponent;
  let fixture: ComponentFixture<StartTopSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTopSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBottomSideComponent } from './start-bottom-side.component';

describe('StartBottomSideComponent', () => {
  let component: StartBottomSideComponent;
  let fixture: ComponentFixture<StartBottomSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartBottomSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartBottomSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

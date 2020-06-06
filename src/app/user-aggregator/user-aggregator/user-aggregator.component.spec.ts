import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAggregatorComponent } from './user-aggregator.component';

describe('UserAggregatorComponent', () => {
  let component: UserAggregatorComponent;
  let fixture: ComponentFixture<UserAggregatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAggregatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAggregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PositionhistoricalComponent} from './positionhistorical.component';

describe('PositionhistoricalComponent', () => {
  let component: PositionhistoricalComponent;
  let fixture: ComponentFixture<PositionhistoricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PositionhistoricalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionhistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

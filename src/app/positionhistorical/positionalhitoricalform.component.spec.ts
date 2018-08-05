import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PositionalhitoricalformComponent} from './positionalhitoricalform.component';

describe('PositionalhitoricalformComponent', () => {
  let component: PositionalhitoricalformComponent;
  let fixture: ComponentFixture<PositionalhitoricalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PositionalhitoricalformComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionalhitoricalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

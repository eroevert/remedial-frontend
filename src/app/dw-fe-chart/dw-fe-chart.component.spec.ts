import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DwFeChartComponent} from './dw-fe-chart.component';

describe('DwFeChartComponent', () => {
  let component: DwFeChartComponent;
  let fixture: ComponentFixture<DwFeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DwFeChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwFeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

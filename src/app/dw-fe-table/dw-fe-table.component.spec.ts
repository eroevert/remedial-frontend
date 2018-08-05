import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DwFeTableComponent} from './dw-fe-table.component';

describe('DwFeTableComponent', () => {
  let component: DwFeTableComponent;
  let fixture: ComponentFixture<DwFeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DwFeTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwFeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

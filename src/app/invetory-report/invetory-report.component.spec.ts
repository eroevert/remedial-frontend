import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetoryReportComponent } from './invetory-report.component';

describe('InvetoryReportComponent', () => {
  let component: InvetoryReportComponent;
  let fixture: ComponentFixture<InvetoryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvetoryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

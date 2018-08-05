import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicLevelFormComponent } from './academic-level-form.component';

describe('AcademicLevelFormComponent', () => {
  let component: AcademicLevelFormComponent;
  let fixture: ComponentFixture<AcademicLevelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicLevelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

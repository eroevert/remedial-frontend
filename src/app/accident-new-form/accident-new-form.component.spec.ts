import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentNewFormComponent } from './accident-new-form.component';

describe('AccidentNewFormComponent', () => {
  let component: AccidentNewFormComponent;
  let fixture: ComponentFixture<AccidentNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

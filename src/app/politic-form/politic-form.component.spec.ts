import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticFormComponent } from './politic-form.component';

describe('PoliticFormComponent', () => {
  let component: PoliticFormComponent;
  let fixture: ComponentFixture<PoliticFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

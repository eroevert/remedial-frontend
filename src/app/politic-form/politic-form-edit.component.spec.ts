import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticFormEditComponent } from './politic-form-edit.component';

describe('PoliticFormEditComponent', () => {
  let component: PoliticFormEditComponent;
  let fixture: ComponentFixture<PoliticFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

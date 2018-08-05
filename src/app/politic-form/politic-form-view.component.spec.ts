import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticFormViewComponent } from './politic-form-view.component';

describe('PoliticFormViewComponent', () => {
  let component: PoliticFormViewComponent;
  let fixture: ComponentFixture<PoliticFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

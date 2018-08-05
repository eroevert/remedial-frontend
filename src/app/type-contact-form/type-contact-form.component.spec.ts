import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeContactFormComponent } from './type-contact-form.component';

describe('TypeContactFormComponent', () => {
  let component: TypeContactFormComponent;
  let fixture: ComponentFixture<TypeContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

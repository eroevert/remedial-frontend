import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeContractFormComponent } from './type-contract-form.component';

describe('TypeContractFormComponent', () => {
  let component: TypeContractFormComponent;
  let fixture: ComponentFixture<TypeContractFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeContractFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

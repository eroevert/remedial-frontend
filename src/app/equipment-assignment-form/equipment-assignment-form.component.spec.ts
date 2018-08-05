import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAssignmentFormComponent } from './equipment-assignment-form.component';

describe('EquipmentAssignmentFormComponent', () => {
  let component: EquipmentAssignmentFormComponent;
  let fixture: ComponentFixture<EquipmentAssignmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentAssignmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentAssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

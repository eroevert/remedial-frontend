import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAssignmentEditFormComponent } from './equipment-assignment-edit-form.component';

describe('EquipmentAssignmentEditFormComponent', () => {
  let component: EquipmentAssignmentEditFormComponent;
  let fixture: ComponentFixture<EquipmentAssignmentEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentAssignmentEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentAssignmentEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

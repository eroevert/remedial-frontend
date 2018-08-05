import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAssignmentComponent } from './equipment-assignment.component';

describe('EquipmentAssignmentComponent', () => {
  let component: EquipmentAssignmentComponent;
  let fixture: ComponentFixture<EquipmentAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

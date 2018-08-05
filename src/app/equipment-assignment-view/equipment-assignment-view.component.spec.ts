import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAssignmentViewComponent } from './equipment-assignment-view.component';

describe('EquipmentAssignmentViewComponent', () => {
  let component: EquipmentAssignmentViewComponent;
  let fixture: ComponentFixture<EquipmentAssignmentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentAssignmentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentAssignmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

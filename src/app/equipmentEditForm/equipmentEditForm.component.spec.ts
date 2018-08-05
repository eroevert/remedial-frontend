import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {EquipmentEditFormComponent} from './equipmentEditForm.component';

describe('EquipmentEditFormComponent', () => {
  let component: EquipmentEditFormComponent;
  let fixture: ComponentFixture<EquipmentEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {EquipmentTypeEditFormComponent} from './equipmentTypeEditForm.component';

describe('EquipmentTypeEditFormComponent', () => {
  let component: EquipmentTypeEditFormComponent;
  let fixture: ComponentFixture<EquipmentTypeEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentTypeEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTypeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

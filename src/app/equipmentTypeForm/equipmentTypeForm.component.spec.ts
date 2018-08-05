import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EquipmentTypeComponent} from '../equipmentType/equipmentType.component';
import {EquipmentTypeFormComponent} from './equipmentTypeForm.component';


describe('EquipmentTypeFormComponent', () => {
  let component: EquipmentTypeFormComponent;
  let fixture: ComponentFixture<EquipmentTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

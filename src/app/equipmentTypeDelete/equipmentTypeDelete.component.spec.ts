import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {EquipmentTypeDeleteComponent} from './equipmentTypeDelete.component';

describe('EquipmentDeleteComponent', () => {
  let component: EquipmentTypeDeleteComponent;
  let fixture: ComponentFixture<EquipmentTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentTypeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

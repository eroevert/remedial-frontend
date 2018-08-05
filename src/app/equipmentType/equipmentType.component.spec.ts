import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EquipmentTypeComponent} from './equipmentType.component';



describe('EquipmentTypeComponent', () => {
  let component: EquipmentTypeComponent;
  let fixture: ComponentFixture<EquipmentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

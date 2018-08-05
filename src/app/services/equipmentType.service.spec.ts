import { TestBed, inject } from '@angular/core/testing';
import {EquipmentTypeService} from './equipmentType.service';


describe('EquipmentTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipmentTypeService]
    });
  });

  it('should be created', inject([EquipmentTypeService], (service: EquipmentTypeService) => {
    expect(service).toBeTruthy();
  }));
});

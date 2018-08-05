import { TestBed, inject } from '@angular/core/testing';

import { EquipmentAssignmentService } from './equipment-assignment.service';

describe('EquipmentAssignmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipmentAssignmentService]
    });
  });

  it('should be created', inject([EquipmentAssignmentService], (service: EquipmentAssignmentService) => {
    expect(service).toBeTruthy();
  }));
});

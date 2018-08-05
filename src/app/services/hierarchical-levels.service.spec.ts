import { TestBed, inject } from '@angular/core/testing';

import { HierarchicalLevelsService } from './hierarchical-levels.service';

describe('HierarchicalLevelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HierarchicalLevelsService]
    });
  });

  it('should be created', inject([HierarchicalLevelsService], (service: HierarchicalLevelsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { PoliticsService } from './politics.service';

describe('PoliticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliticsService]
    });
  });

  it('should be created', inject([PoliticsService], (service: PoliticsService) => {
    expect(service).toBeTruthy();
  }));
});

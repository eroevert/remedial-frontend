import { TestBed, inject } from '@angular/core/testing';

import { AuditoryService } from './auditory.service';

describe('AuditoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditoryService]
    });
  });

  it('should be created', inject([AuditoryService], (service: AuditoryService) => {
    expect(service).toBeTruthy();
  }));
});

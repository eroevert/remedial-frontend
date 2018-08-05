import { TestBed, inject } from '@angular/core/testing';

import { DocumenttypeService } from './documenttype.service';

describe('DocumenttypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumenttypeService]
    });
  });

  it('should be created', inject([DocumenttypeService], (service: DocumenttypeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { TypeContractService } from './type-contract.service';

describe('TypeContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeContractService]
    });
  });

  it('should be created', inject([TypeContractService], (service: TypeContractService) => {
    expect(service).toBeTruthy();
  }));
});

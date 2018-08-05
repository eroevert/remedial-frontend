import { TestBed, inject } from '@angular/core/testing';

import { SalaryScaleService } from './salary-scale.service';

describe('SalaryScaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalaryScaleService]
    });
  });

  it('should be created', inject([SalaryScaleService], (service: SalaryScaleService) => {
    expect(service).toBeTruthy();
  }));
});

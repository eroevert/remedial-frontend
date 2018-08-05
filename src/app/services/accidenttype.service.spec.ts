import { TestBed, inject } from '@angular/core/testing';

import { AccidenttypeService } from './accidenttype.service';

describe('AccidenttypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidenttypeService]
    });
  });

  it('should be created', inject([AccidenttypeService], (service: AccidenttypeService) => {
    expect(service).toBeTruthy();
  }));
});

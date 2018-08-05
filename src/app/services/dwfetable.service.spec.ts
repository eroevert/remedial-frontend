import {inject, TestBed} from '@angular/core/testing';

import {DwfetableService} from './dwfetable.service';

describe('DwfetableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DwfetableService]
    });
  });

  it('should be created', inject([DwfetableService], (service: DwfetableService) => {
    expect(service).toBeTruthy();
  }));
});

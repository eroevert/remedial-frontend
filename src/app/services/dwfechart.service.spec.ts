import {inject, TestBed} from '@angular/core/testing';

import {DwfechartService} from './dwfechart.service';

describe('DwfechartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DwfechartService]
    });
  });

  it('should be created', inject([DwfechartService], (service: DwfechartService) => {
    expect(service).toBeTruthy();
  }));
});

import {inject, TestBed} from '@angular/core/testing';

import {PositionhistoricalService} from './positionhistorical.service';

describe('PositionhistoricalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionhistoricalService]
    });
  });

  it('should be created', inject([PositionhistoricalService], (service: PositionhistoricalService) => {
    expect(service).toBeTruthy();
  }));
});

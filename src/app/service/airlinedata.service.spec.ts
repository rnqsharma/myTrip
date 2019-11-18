import { TestBed } from '@angular/core/testing';

import { AirlinedataService } from './airlinedata.service';

describe('AirlinedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirlinedataService = TestBed.get(AirlinedataService);
    expect(service).toBeTruthy();
  });
});

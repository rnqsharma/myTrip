import { TestBed } from '@angular/core/testing';

import { FlightdataService } from './flightdata.service';

describe('FlightdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightdataService = TestBed.get(FlightdataService);
    expect(service).toBeTruthy();
  });
});

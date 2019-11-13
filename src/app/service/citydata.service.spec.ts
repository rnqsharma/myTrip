import { TestBed } from '@angular/core/testing';

import { CitydataService } from './citydata.service';

describe('CitydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitydataService = TestBed.get(CitydataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LogindataService } from './logindata.service';

describe('LogindataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogindataService = TestBed.get(LogindataService);
    expect(service).toBeTruthy();
  });
});

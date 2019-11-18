import { TestBed } from '@angular/core/testing';

import { HeadernameService } from './headername.service';

describe('HeadernameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadernameService = TestBed.get(HeadernameService);
    expect(service).toBeTruthy();
  });
});

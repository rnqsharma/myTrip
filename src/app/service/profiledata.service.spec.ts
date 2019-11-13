import { TestBed } from '@angular/core/testing';

import { ProfiledataService } from './profiledata.service';

describe('ProfiledataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfiledataService = TestBed.get(ProfiledataService);
    expect(service).toBeTruthy();
  });
});

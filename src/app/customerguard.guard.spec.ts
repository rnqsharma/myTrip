import { TestBed, async, inject } from '@angular/core/testing';

import { CustomerguardGuard } from './customerguard.guard';

describe('CustomerguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerguardGuard]
    });
  });

  it('should ...', inject([CustomerguardGuard], (guard: CustomerguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

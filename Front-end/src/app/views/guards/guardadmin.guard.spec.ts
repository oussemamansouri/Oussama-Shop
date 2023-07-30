import { TestBed } from '@angular/core/testing';

import { GuardadminGuard } from './guardadmin.guard';

describe('GuardadminGuard', () => {
  let guard: GuardadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

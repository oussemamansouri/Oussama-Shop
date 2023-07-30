import { TestBed } from '@angular/core/testing';

import { AuthuserService } from './authuser.service';

describe('AuthuserService', () => {
  let service: AuthuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

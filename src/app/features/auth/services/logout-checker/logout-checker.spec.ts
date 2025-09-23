import { TestBed } from '@angular/core/testing';

import { LogoutChecker } from './logout-checker';

describe('LogoutChecker', () => {
  let service: LogoutChecker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutChecker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LogoutChecker } from './logout-checker';

describe('LogoutChecker', () => {
  let service: LogoutChecker;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutChecker, provideRouter([])],
    });

    service = TestBed.inject(LogoutChecker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

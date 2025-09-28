import { TestBed } from '@angular/core/testing';

import { A11yAnnouncerService } from './a11y-announcer.service';

describe('A11yAnnouncerService', () => {
  let service: A11yAnnouncerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A11yAnnouncerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

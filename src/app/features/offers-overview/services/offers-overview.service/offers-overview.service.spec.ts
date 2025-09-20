import { TestBed } from '@angular/core/testing';

import { OffersOverviewService } from './offers-overview.service';

describe('OffersOverviewService', () => {
  let service: OffersOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

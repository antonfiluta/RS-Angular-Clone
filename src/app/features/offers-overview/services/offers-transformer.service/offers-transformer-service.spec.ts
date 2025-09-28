import { TestBed } from '@angular/core/testing';

import { OffersTransformerService } from './offers-transformer-service';

describe('OffersTransformerService', () => {
  let service: OffersTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FiltersTransformService } from './filters-transform.service';

describe('FiltersTransformService', () => {
  let service: FiltersTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

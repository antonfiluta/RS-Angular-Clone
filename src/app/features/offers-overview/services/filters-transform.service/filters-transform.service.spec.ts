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

  it('should return empty string if no filters provided', () => {
    expect(service.buildQueryParams({})).toBe('');
  });

  it('should build query string correctly', () => {
    const query = service.buildQueryParams({
      city: 'Berlin',
      minGuests: 2,
      maxPrice: 100,
      page: 1,
      limit: 10,
    });
    expect(query).toBe('?city=Berlin&maxGuests=2&price=100&page=1&limit=10');
  });

  it('should ignore invalid/empty values', () => {
    const query = service.buildQueryParams({
      city: '  ',
      minGuests: 0,
      maxPrice: null,
      page: undefined,
      limit: -5,
    });
    expect(query).toBe('');
  });
});

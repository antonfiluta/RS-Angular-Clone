import { TestBed } from '@angular/core/testing';
import { SpecificCityService } from './specific-city.service';

describe('SpecificCityService', () => {
  let service: SpecificCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

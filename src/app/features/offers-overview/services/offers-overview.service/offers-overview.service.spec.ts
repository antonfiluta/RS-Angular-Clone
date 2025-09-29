import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OffersOverviewService } from './offers-overview.service';
import { FiltersTransformService } from '../filters-transform.service/filters-transform.service';
import { RawAparment } from '../../models/offers-overview.models';

describe('OffersOverviewService', () => {
  let service: OffersOverviewService;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let filtersSpy: jasmine.SpyObj<FiltersTransformService>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    filtersSpy = jasmine.createSpyObj('FiltersTransformService', ['buildQueryParams']);

    TestBed.configureTestingModule({
      providers: [
        OffersOverviewService,
        { provide: HttpClient, useValue: httpSpy },
        { provide: FiltersTransformService, useValue: filtersSpy },
      ],
    });

    service = TestBed.inject(OffersOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getRawOffers with correct URL', () => {
    filtersSpy.buildQueryParams.and.returnValue('?city=Berlin');
    httpSpy.get.and.returnValue(of([]));

    service.getRawOffers({ city: 'Berlin' }).subscribe((res) => {
      expect(res).toEqual([]);
    });

    expect(filtersSpy.buildQueryParams).toHaveBeenCalledWith({ city: 'Berlin' });
    expect(httpSpy.get).toHaveBeenCalledWith('/apartment?city=Berlin');
  });

  it('should call getSpecificOffer with correct URL', () => {
    const mockOffer = { _id: '123' } as RawAparment;
    httpSpy.get.and.returnValue(of(mockOffer));

    service.getSpecificOffer('123').subscribe((res) => {
      expect(res).toEqual(mockOffer);
    });

    expect(httpSpy.get).toHaveBeenCalledWith('/apartment/123');
  });
});

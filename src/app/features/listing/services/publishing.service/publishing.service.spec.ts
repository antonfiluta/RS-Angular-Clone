import { TestBed } from '@angular/core/testing';
import { PublishingService } from './publishing.service';
import { OffersTransformerService } from '../../../offers-overview/services/offers-transformer.service/offers-transformer-service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import {
  OfferModel,
  PROPERTY,
  RawAparment,
} from '../../../offers-overview/models/offers-overview.models';

describe('PublishingService', () => {
  let service: PublishingService;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let transformerSpy: jasmine.SpyObj<OffersTransformerService>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['post']);
    transformerSpy = jasmine.createSpyObj('OffersTransformerService', [
      'transformOfferToRawApartment',
    ]);

    TestBed.configureTestingModule({
      providers: [
        PublishingService,
        { provide: HttpClient, useValue: httpSpy },
        { provide: OffersTransformerService, useValue: transformerSpy },
      ],
    });

    service = TestBed.inject(PublishingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call transform and http.post with correct types', (done) => {
    const mockRawApartment: Omit<RawAparment, '_id'> = {
      userId: 'host1',
      title: 'Test Apartment',
      descr: 'Nice place',
      photo: ['photo1.jpg'],
      price: 100,
      propertyType: PROPERTY.APERTMENT,
      country: 'Germany',
      city: 'Berlin',
      street: 'Main',
      building: '10',
      maxGuests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      favorites: [],
      accessibleEnvironment: {
        wifi: true,
        tv: false,
        kitchen: false,
        washer: false,
        airConditioning: false,
        parking: false,
      },
      amenities: {
        pool: false,
        piano: false,
        beachAccess: false,
        gym: false,
        billiards: false,
        grill: false,
      },
      safetyFeatures: {
        smokeDetector: true,
        fireExtinguisher: true,
        firstAidKit: true,
        securitySystem: false,
      },
    };

    transformerSpy.transformOfferToRawApartment.and.returnValue(mockRawApartment);
    httpSpy.post.and.returnValue(of(mockRawApartment));

    const dummyOffer = { id: '1' } as OfferModel;

    service.publishApartment(dummyOffer).subscribe((res) => {
      expect(transformerSpy.transformOfferToRawApartment).toHaveBeenCalledWith(dummyOffer);
      expect(httpSpy.post).toHaveBeenCalledWith('/apartment', mockRawApartment);
      expect(res).toEqual(mockRawApartment);
      done();
    });
  });

  it('should propagate error if http.post fails', (done) => {
    const mockRawApartment: Omit<RawAparment, '_id'> = {
      userId: 'host1',
      title: 'Test Apartment',
      descr: 'Nice place',
      photo: ['photo1.jpg'],
      price: 100,
      propertyType: PROPERTY.APERTMENT,
      country: 'Germany',
      city: 'Berlin',
      street: 'Main',
      building: '10',
      maxGuests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      favorites: [],
      accessibleEnvironment: {
        wifi: true,
        tv: false,
        kitchen: false,
        washer: false,
        airConditioning: false,
        parking: false,
      },
      amenities: {
        pool: false,
        piano: false,
        beachAccess: false,
        gym: false,
        billiards: false,
        grill: false,
      },
      safetyFeatures: {
        smokeDetector: true,
        fireExtinguisher: true,
        firstAidKit: true,
        securitySystem: false,
      },
    };

    transformerSpy.transformOfferToRawApartment.and.returnValue(mockRawApartment);
    httpSpy.post.and.returnValue(throwError(() => new Error('Server error')));

    const dummyOffer = { id: '1' } as OfferModel;

    service.publishApartment(dummyOffer).subscribe({
      next: () => fail('Expected error, got success'),
      error: (err) => {
        expect(transformerSpy.transformOfferToRawApartment).toHaveBeenCalledWith(dummyOffer);
        expect(httpSpy.post).toHaveBeenCalledWith('/apartment', mockRawApartment);
        expect(err.message).toBe('Server error');
        done();
      },
    });
  });
});

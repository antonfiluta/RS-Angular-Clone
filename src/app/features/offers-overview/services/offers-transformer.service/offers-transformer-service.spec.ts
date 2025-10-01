import { TestBed } from '@angular/core/testing';
import { OffersTransformerService } from './offers-transformer-service';
import {
  OfferModel,
  ApartmentPhoto,
  Address,
  CapacityInfo,
  AccessibleEnvironment,
  Amenities,
  SafetyFeatures,
  PROPERTY,
} from '../../models/offers-overview.models';

describe('OffersTransformerService', () => {
  let service: OffersTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform OfferModel to RawAparment correctly', () => {
    const mockOffer: OfferModel = {
      id: '1',
      hostId: 'host1',
      title: 'Test Apartment',
      description: 'Nice place',
      propertyType: 'apartment',
      address: {
        country: 'Germany',
        city: 'Berlin',
        street: 'Street 1',
        building: '1A',
      } as Address,
      capacity: {
        maxGuests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
      } as CapacityInfo,
      accessibleEnvironment: {
        wifi: true,
        tv: true,
        kitchen: true,
        washer: false,
        airConditioning: false,
        parking: false,
      } as AccessibleEnvironment,
      amenities: {
        pool: false,
        piano: false,
        beachAccess: false,
        gym: false,
        billiards: false,
        grill: false,
      } as Amenities,
      safetyFeatures: {
        smokeDetector: true,
        fireExtinguisher: true,
        firstAidKit: true,
        securitySystem: false,
      } as SafetyFeatures,
      photos: [{ id: 'p1', url: 'photo1.jpg' }] as ApartmentPhoto[],
      pricing: { weekdayPrice: 100, weekendPrice: 120 },
      isFavorite: true,
      averageRating: 5,
    };

    const raw = service.transformOfferToRawApartment(mockOffer);

    expect(raw.userId).toBe(mockOffer.hostId);
    expect(raw.title).toBe(mockOffer.title);
    expect(raw.descr).toBe(mockOffer.description);
    expect(raw.photo).toEqual(mockOffer.photos.map((p) => p.url));
    expect(raw.propertyType).toBe(PROPERTY.APERTMENT);
    expect(raw.favorites).toContain(mockOffer.hostId);
  });
});

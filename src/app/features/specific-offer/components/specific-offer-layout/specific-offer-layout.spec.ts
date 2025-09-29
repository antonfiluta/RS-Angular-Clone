import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SpecificOfferLayout } from './specific-offer-layout';
import { selectSpecificOffer } from '../../../offers-overview/store/offers-overview.selector';
import { OfferModel } from '../../../offers-overview/models/offers-overview.models';
import { TranslateModule } from '@ngx-translate/core';

describe('SpecificOfferLayout', () => {
  let component: SpecificOfferLayout;
  let fixture: ComponentFixture<SpecificOfferLayout>;

  const mockOffer: OfferModel = {
    id: '1',
    hostId: 'host1',
    title: 'Cozy Apartment',
    description: 'Nice place in Berlin',
    propertyType: 'apartment',
    address: { country: 'Germany', city: 'Berlin', street: 'Main St', building: '12' },
    capacity: { maxGuests: 2, bedrooms: 1, beds: 1, bathrooms: 1 },
    accessibleEnvironment: {
      wifi: true,
      tv: false,
      kitchen: true,
      washer: false,
      airConditioning: true,
      parking: false,
    },
    amenities: {
      pool: false,
      piano: false,
      beachAccess: false,
      gym: true,
      billiards: false,
      grill: true,
    },
    safetyFeatures: {
      smokeDetector: true,
      fireExtinguisher: true,
      firstAidKit: false,
      securitySystem: false,
    },
    photos: [{ id: 'photo1', url: 'photo1.jpg' }],
    pricing: { weekdayPrice: 100, weekendPrice: 120 },
    isFavorite: false,
    averageRating: 4,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificOfferLayout, TranslateModule.forRoot()],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectSpecificOffer, value: mockOffer }],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificOfferLayout);
    component = fixture.componentInstance;
    component.cityId = 'Berlin';
    component.offerId = '1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

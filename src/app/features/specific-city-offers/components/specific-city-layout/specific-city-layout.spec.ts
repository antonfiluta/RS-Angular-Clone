import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SpecificCityLayout } from './specific-city-layout';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import {
  selectCityName,
  selectSpecificCityOffers,
} from '../../../offers-overview/store/offers-overview.selector';
import { OfferModel } from '../../../offers-overview/models/offers-overview.models';

describe('SpecificCityLayout', () => {
  let component: SpecificCityLayout;
  let fixture: ComponentFixture<SpecificCityLayout>;

  const mockOffers: OfferModel[] = [
    {
      id: '1',
      hostId: 'host1',
      title: 'Nice Apartment',
      description: 'A lovely place',
      propertyType: 'apartment',
      address: { country: 'Germany', city: 'Berlin', street: 'Main St', building: '1A' },
      capacity: { maxGuests: 2, bedrooms: 1, beds: 1, bathrooms: 1 },
      accessibleEnvironment: {
        wifi: true,
        tv: true,
        kitchen: true,
        washer: false,
        airConditioning: true,
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
        firstAidKit: false,
        securitySystem: false,
      },
      photos: [{ id: 'photo1', url: 'photo1.jpg' }],
      pricing: { weekdayPrice: 100, weekendPrice: 120 },
      isFavorite: false,
      averageRating: 4,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificCityLayout, TranslateModule.forRoot()],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectCityName, value: 'Berlin' },
            { selector: selectSpecificCityOffers, value: mockOffers },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ cityId: 'Berlin' }),
            snapshot: { paramMap: { get: () => 'Berlin' } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificCityLayout);
    component = fixture.componentInstance;
    component.cityId = 'Berlin'; // required @Input
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct city name', () => {
    expect(component.cityName()).toBe('Berlin');
  });

  it('should have the correct number of offers', () => {
    expect(component.offers()?.length).toBe(mockOffers.length);
    expect(component.offersAmount()).toBe(mockOffers.length.toString());
  });
});

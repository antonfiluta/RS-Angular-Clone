import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffersOverviewList } from './offers-overview-list';
import { TranslateModule } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { OfferModel } from '../../models/offers-overview.models';

const mockOffer: OfferModel = {
  id: '1',
  hostId: 'host1',
  title: 'Test Offer',
  description: 'Desc',
  propertyType: 'apartment',
  address: { country: 'DE', city: 'Berlin', street: '', building: '' },
  capacity: { maxGuests: 2, bedrooms: 1, beds: 1, bathrooms: 1 },
  accessibleEnvironment: {
    wifi: true,
    tv: false,
    kitchen: true,
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
    fireExtinguisher: false,
    firstAidKit: true,
    securitySystem: false,
  },
  photos: [{ id: 'p1', url: 'photo.jpg' }],
  pricing: { weekdayPrice: 100 },
  isFavorite: false,
  averageRating: 5,
};

@Component({
  selector: 'app-test-host',
  template: `<app-offers-overview-list
    [cityOffers]="offers"
    [cityName]="cityName"
  ></app-offers-overview-list>`,
  standalone: true,
  imports: [OffersOverviewList],
})
class TestHostComponent {
  offers = [mockOffer];
  cityName = 'Berlin';
}

describe('OffersOverviewList', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, TranslateModule.forRoot()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });
});

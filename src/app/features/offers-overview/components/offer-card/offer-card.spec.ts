import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { OfferCard } from './offer-card';
import { OfferModel } from '../../models/offers-overview.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-host',
  standalone: true,
  imports: [OfferCard],
  template: `<app-offer-card [offer]="mockOffer"></app-offer-card>`,
})
class TestHostComponent {
  mockOffer: OfferModel = {
    id: '1',
    hostId: 'host1',
    title: 'Test Offer',
    description: 'Description',
    propertyType: 'apartment',
    address: { country: 'Germany', city: 'Berlin', street: '', building: '' },
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
    photos: [{ id: 'p1', url: 'photo1.jpg' }],
    pricing: { weekdayPrice: 100, weekendPrice: 120 },
    isFavorite: false,
    averageRating: 4.5,
  };
}

describe('OfferCard', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });
});

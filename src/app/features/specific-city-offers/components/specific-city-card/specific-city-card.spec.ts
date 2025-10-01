import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecificCityCard } from './specific-city-card';
import { AddressFormatPipe } from '../../../../shared/pipes/address-format-pipe/address-format-pipe';
import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { OfferModel } from '../../../offers-overview/models/offers-overview.models';

@Component({
  template: `<app-specific-city-card [offer]="offer"></app-specific-city-card>`,
  standalone: true,
  imports: [SpecificCityCard],
})
class TestHostComponent {
  offer: OfferModel = {
    id: '1',
    hostId: 'host1',
    title: 'Test Offer',
    description: 'Test description',
    propertyType: 'apartment',
    address: {
      country: 'TestCountry',
      city: 'TestCity',
      street: 'TestStreet',
      building: '1A',
    },
    capacity: { maxGuests: 2, bedrooms: 1, beds: 1, bathrooms: 1 },
    accessibleEnvironment: {
      wifi: true,
      tv: true,
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
      fireExtinguisher: true,
      firstAidKit: true,
      securitySystem: false,
    },
    photos: [{ id: 'photo1', url: 'photo1.jpg' }],
    pricing: { weekdayPrice: 100, weekendPrice: 120 },
    isFavorite: false,
    averageRating: 4,
  };
}

describe('SpecificCityCard', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let childComponent: SpecificCityCard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, TranslateModule.forRoot(), AddressFormatPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();

    const childDebugElement = fixture.debugElement.children[0];
    childComponent = childDebugElement.componentInstance;
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
    expect(childComponent).toBeTruthy();
  });

  it('should have correct offer input', () => {
    expect(childComponent.offer()).toEqual(hostComponent.offer);
    expect(childComponent.offer().title).toBe('Test Offer');
    expect(childComponent.offer().pricing.weekdayPrice).toBe(100);
  });

  it('should render title and price in template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Offer');
    expect(compiled.textContent).toContain('100');
  });
});

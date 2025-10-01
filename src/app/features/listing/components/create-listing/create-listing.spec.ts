import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { signal } from '@angular/core';
import { of } from 'rxjs';

import { CreateListing } from './create-listing';
import { PublishingService } from '../../services/publishing.service/publishing.service';
import { A11yAnnouncerService } from '../../../../core/services/a11y-announcer-service/a11y-announcer.service';
import { Step3Data } from '../../models/create-listing.model';
import { Address, CapacityInfo, PropertyType } from '../../../../shared/utils/apartments.models';

describe('CreateListing', () => {
  let component: CreateListing;
  let fixture: ComponentFixture<CreateListing>;
  let publishingServiceSpy: jasmine.SpyObj<PublishingService>;
  let announcerSpy: jasmine.SpyObj<A11yAnnouncerService>;
  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    publishingServiceSpy = jasmine.createSpyObj('PublishingService', ['publishApartment']);
    publishingServiceSpy.publishApartment.and.returnValue(of({}));

    announcerSpy = jasmine.createSpyObj('A11yAnnouncerService', ['announce']);

    storeSpy = jasmine.createSpyObj('Store', ['selectSignal']);
    storeSpy.selectSignal.and.returnValue(signal({ _id: 'user123', name: 'Test User' }));

    await TestBed.configureTestingModule({
      imports: [CreateListing, TranslateModule.forRoot()],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: PublishingService, useValue: publishingServiceSpy },
        { provide: A11yAnnouncerService, useValue: announcerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move steps correctly', () => {
    expect(component.currentStep()).toBe(1);

    component.step1Data.set({
      propertyType: 'apartment' as PropertyType,
      address: { country: 'Germany', city: 'Berlin' } as Partial<Address>,
      capacity: { maxGuests: 2, bedrooms: 1, beds: 1, bathrooms: 1 } as Partial<CapacityInfo>,
    });

    component.nextStep();
    expect(component.currentStep()).toBe(2);

    component.previousStep();
    expect(component.currentStep()).toBe(1);
  });

  it('should not save incomplete listing', () => {
    component.saveListing();
    expect(publishingServiceSpy.publishApartment).not.toHaveBeenCalled();
    expect(announcerSpy.announce).not.toHaveBeenCalled();
  });

  it('should save complete listing', () => {
    component.step1Data.set({
      propertyType: 'apartment' as PropertyType,
      address: { country: 'Germany', city: 'Berlin' },
      capacity: { maxGuests: 2, bedrooms: 1, beds: 1, bathrooms: 1 },
    });

    const step3: Step3Data = {
      title: 'Test Listing',
      description: 'Nice place',
      pricing: { weekdayPrice: 100, weekendPrice: 120 },
      photos: [{ id: '1', url: 'photo1.jpg' }],
    };
    component.step3Data.set(step3);

    component.saveListing();

    expect(publishingServiceSpy.publishApartment).toHaveBeenCalled();
    expect(announcerSpy.announce).toHaveBeenCalledWith('Listing created successfully!');
  });
});

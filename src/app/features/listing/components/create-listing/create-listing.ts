import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccessibleEnvironment,
  Address,
  Amenities,
  Apartment,
  ApartmentPhoto,
  CapacityInfo,
  Pricing,
  PropertyType,
  SafetyFeatures,
} from '../../../../shared/utils/apartments.models';
import {
  PROPERTY_TYPES,
  BASIC_AMENITIES,
  LUXURY_AMENITIES,
  SAFETY_ITEMS,
} from '../../config/listing-config';
import { Step1Data, Step2Data, Step3Data } from '../../models/create-listing.model';
import { TranslateModule } from '@ngx-translate/core';
import { A11yAnnouncerService } from '../../../../core/services/a11y-announcer-service/a11y-announcer.service';

@Component({
  selector: 'app-create-listing',
  imports: [CommonModule, TranslateModule],
  templateUrl: './create-listing.html',
  styleUrl: './create-listing.scss',
})
export class CreateListing {
  propertyTypes = PROPERTY_TYPES;
  basicAmenities = BASIC_AMENITIES;
  luxuryAmenities = LUXURY_AMENITIES;
  safetyItems = SAFETY_ITEMS;

  private announcer = inject(A11yAnnouncerService);

  // Signals for step management
  currentStep = signal<number>(1);

  // Step data signals
  step1Data = signal<Step1Data>({
    propertyType: null,
    address: {},
    capacity: { maxGuests: 1, bedrooms: 0, beds: 0, bathrooms: 0 },
  });

  step2Data = signal<Step2Data>({
    accessibleEnvironment: {},
    amenities: {},
    safetyFeatures: {},
  });

  step3Data = signal<Step3Data>({
    title: '',
    description: '',
    photos: [],
    pricing: {},
  });

  // Navigation methods
  nextStep(): void {
    if (this.canProceed()) {
      this.currentStep.update((step) => step + 1);
    }
  }

  previousStep(): void {
    this.currentStep.update((step) => Math.max(1, step - 1));
  }

  // Validation methods
  canProceed(): boolean {
    switch (this.currentStep()) {
      case 1:
        return !!(
          this.step1Data().propertyType &&
          this.step1Data().address.country &&
          this.step1Data().address.city
        );
      case 2:
        return true; // Step 2 is always valid (amenities are optional)
      default:
        return false;
    }
  }

  canSave(): boolean {
    return !!(
      this.step3Data().title.trim() &&
      this.step3Data().description.trim() &&
      this.step3Data().pricing.weekdayPrice &&
      this.step3Data().pricing.weekendPrice &&
      this.step3Data().photos.length > 0
    );
  }

  // Step 1 methods
  selectPropertyType(type: PropertyType): void {
    this.step1Data.update((data) => ({
      ...data,
      propertyType: type,
    }));
  }

  updateAddress(field: keyof Address, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.step1Data.update((data) => ({
      ...data,
      address: {
        ...data.address,
        [field]: value,
      },
    }));
  }

  updateCapacity(field: keyof CapacityInfo, delta: number): void {
    this.step1Data.update((data) => ({
      ...data,
      capacity: {
        ...data.capacity,
        [field]: Math.max(0, (data.capacity[field] || 0) + delta),
      },
    }));
  }

  // Step 2 methods
  getBasicAmenity(key: string): boolean {
    return this.step2Data().accessibleEnvironment[key as keyof AccessibleEnvironment] || false;
  }

  toggleBasicAmenity(key: string): void {
    this.step2Data.update((data) => ({
      ...data,
      accessibleEnvironment: {
        ...data.accessibleEnvironment,
        [key]: !data.accessibleEnvironment[key as keyof AccessibleEnvironment],
      },
    }));
  }

  getLuxuryAmenity(key: string): boolean {
    return this.step2Data().amenities[key as keyof Amenities] || false;
  }

  toggleLuxuryAmenity(key: string): void {
    this.step2Data.update((data) => ({
      ...data,
      amenities: {
        ...data.amenities,
        [key]: !data.amenities[key as keyof Amenities],
      },
    }));
  }

  getSafetyFeature(key: string): boolean {
    return this.step2Data().safetyFeatures[key as keyof SafetyFeatures] || false;
  }

  toggleSafetyFeature(key: string): void {
    this.step2Data.update((data) => ({
      ...data,
      safetyFeatures: {
        ...data.safetyFeatures,
        [key]: !data.safetyFeatures[key as keyof SafetyFeatures],
      },
    }));
  }

  // Step 3 methods
  updateStep3(field: 'title' | 'description', event: Event): void {
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.step3Data.update((data) => ({
      ...data,
      [field]: value,
    }));
  }

  updatePricing(field: 'weekdayPrice' | 'weekendPrice', event: Event): void {
    const value = parseFloat((event.target as HTMLInputElement).value) || 0;
    this.step3Data.update((data) => ({
      ...data,
      pricing: {
        ...data.pricing,
        [field]: value,
      },
    }));
  }

  addPhoto(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const photo: ApartmentPhoto = {
          id: crypto.randomUUID(),
          url: e.target?.result as string,
        };
        this.step3Data.update((data) => ({
          ...data,
          photos: [...data.photos, photo],
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  removePhoto(index: number): void {
    this.step3Data.update((data) => ({
      ...data,
      photos: data.photos.filter((_, i) => i !== index),
    }));
  }

  // Save listing
  saveListing(): void {
    if (!this.canSave()) return;

    const apartment: Partial<Apartment> = {
      id: crypto.randomUUID(),
      hostId: 'current-user-id', // Replace with actual user ID
      title: this.step3Data().title,
      description: this.step3Data().description,

      // Step 1 data
      propertyType: this.step1Data().propertyType!,
      address: this.step1Data().address as Address,
      capacity: this.step1Data().capacity as CapacityInfo,

      // Step 2 data
      accessibleEnvironment: this.step2Data().accessibleEnvironment as AccessibleEnvironment,
      amenities: this.step2Data().amenities as Amenities,
      safetyFeatures: this.step2Data().safetyFeatures as SafetyFeatures,

      // Step 3 data
      photos: this.step3Data().photos,
      pricing: this.step3Data().pricing as Pricing,

      // Default values
      isFavorite: false,
      averageRating: 0,
    };

    console.log('Saving apartment:', apartment);
    // this.apartmentService.createApartment(apartment).subscribe(...)
    alert('Listing created!');
    this.announcer.announce('Listing created successfully!');
  }
}

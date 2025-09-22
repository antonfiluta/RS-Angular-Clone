import {
  AccessibleEnvironment,
  Address,
  Amenities,
  ApartmentPhoto,
  CapacityInfo,
  Pricing,
  PropertyType,
  SafetyFeatures,
} from '../../../shared/utils/apartments.models';

export interface Step1Data {
  propertyType: PropertyType | null;
  address: Partial<Address>;
  capacity: Partial<CapacityInfo>;
}

export interface Step2Data {
  accessibleEnvironment: Partial<AccessibleEnvironment>;
  amenities: Partial<Amenities>;
  safetyFeatures: Partial<SafetyFeatures>;
}

export interface Step3Data {
  title: string;
  description: string;
  photos: ApartmentPhoto[];
  pricing: Partial<Pricing>;
}

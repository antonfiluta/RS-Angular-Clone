export interface OffersOverviewModel {
  cities: CityOffersModel[];
}
export interface CityOffersModel {
  name: string;
  offers: OfferModel[];
}

export interface OfferModel {
  id: string;
  hostId: string; // ID пользователя-владельца
  title: string; // max 25 chars
  description: string; // max 500 chars

  // Основная информация
  propertyType: PropertyType;
  address: Address;
  capacity: CapacityInfo;

  // Удобства и особенности
  accessibleEnvironment: AccessibleEnvironment;
  amenities: Amenities;
  safetyFeatures: SafetyFeatures;

  // Фотографии
  photos: ApartmentPhoto[];

  // Ценообразование
  pricing: Pricing;

  // Является ли избранным
  isFavorite: boolean;

  // Рейтинги
  averageRating: number;
}

// Типы свойств
export type PropertyType =
  | 'apartment' // Квартира
  | 'part_apartment' // Часть квартиры
  | 'whole_house' // Целый дом
  | 'room' // Комната дома
  | 'dormitory' // Общежитие
  | 'cabin'; // Хижина

// Адрес
export interface Address {
  country: string;
  city: string;
  street: string;
  building: string;
  details?: string; // Квартира, этаж, корпус
}

// Вместимость
export interface CapacityInfo {
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

// Удобства
export interface AccessibleEnvironment {
  wifi: boolean;
  tv: boolean;
  kitchen: boolean;
  washer: boolean;
  airConditioning: boolean;
  parking: boolean;
}

//Расскошные удобства
export interface Amenities {
  pool: boolean;
  piano: boolean;
  beachAccess: boolean;
  gym: boolean;
  billiards: boolean;
  grill: boolean;
}

// Средства безопасности
export interface SafetyFeatures {
  smokeDetector: boolean;
  fireExtinguisher: boolean;
  firstAidKit: boolean;
  securitySystem: boolean;
}

// Фотографии
export interface ApartmentPhoto {
  id: string;
  url: string;
}

// Ценообразование
export interface Pricing {
  weekdayPrice: number;
  weekendPrice?: number;
}

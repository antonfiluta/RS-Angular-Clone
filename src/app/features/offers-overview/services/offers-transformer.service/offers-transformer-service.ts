import { Injectable } from '@angular/core';
import {
  AccessibleEnvironment,
  Address,
  Amenities,
  ApartmentPhoto,
  CapacityInfo,
  CityOffersModel,
  OfferModel,
  OffersOverviewModel,
  Pricing,
  PROPERTY,
  PropertyType,
  RawAparment,
  SafetyFeatures,
} from '../../models/offers-overview.models';

@Injectable({
  providedIn: 'root',
})
export class OffersTransformerService {
  public getOfferOverview(rawApartments: RawAparment[]): OffersOverviewModel {
    // Группируем апартаменты по городам
    const apartmentsByCity = this.groupApartmentsByCity(rawApartments);

    // Преобразуем каждую группу в CityOffersModel
    const cities: CityOffersModel[] = Object.entries(apartmentsByCity).map(
      ([cityName, cityApartments]) => ({
        name: cityName,
        offers: cityApartments.map((apartment) => this.transformApartmentToOffer(apartment)),
      }),
    );

    return { cities };
  }

  private groupApartmentsByCity(apartments: RawAparment[]): Record<string, RawAparment[]> {
    return apartments.reduce(
      (acc, apartment) => {
        const city = apartment.city;
        if (!acc[city]) {
          acc[city] = [];
        }
        acc[city].push(apartment);
        return acc;
      },
      {} as Record<string, RawAparment[]>,
    );
  }

  public transformApartmentToOffer(raw: RawAparment): OfferModel {
    return {
      id: raw._id,
      hostId: raw.userId,
      title: raw.title,
      description: raw.descr,

      propertyType: this.mapPropertyType(raw.propertyType),
      address: this.transformAddress(raw),
      capacity: this.transformCapacity(raw),

      accessibleEnvironment: this.getDefaultAccessibleEnvironment(),
      amenities: this.getDefaultAmenities(),
      safetyFeatures: this.getDefaultSafetyFeatures(),

      photos: this.transformPhotos(raw.photo),

      pricing: this.transformPricing(raw.price),

      isFavorite: raw.favorites && raw.favorites.length > 0,

      averageRating: this.calculateAverageRating(), // Если нет данных о рейтингах, можно поставить 0 или генерировать случайно
    };
  }

  private mapPropertyType(rawPropertyType: PROPERTY): PropertyType {
    const propertyTypeMap: Record<PROPERTY, PropertyType> = {
      [PROPERTY.APERTMENT]: 'apartment',
      [PROPERTY.PART_APERTMENT]: 'part_apartment',
      [PROPERTY.HOUSE]: 'whole_house',
      [PROPERTY.ROOM]: 'room',
      [PROPERTY.DORMITORY]: 'dormitory',
      [PROPERTY.CABIN]: 'cabin',
    };

    return propertyTypeMap[rawPropertyType] || 'apartment';
  }

  private transformAddress(raw: RawAparment): Address {
    return {
      country: raw.country,
      city: raw.city,
      street: raw.street,
      building: raw.building,
      // details можно добавить позже, если появятся данные
    };
  }

  private transformCapacity(raw: RawAparment): CapacityInfo {
    return {
      maxGuests: raw.maxGuests,
      bedrooms: raw.bedrooms,
      beds: raw.beds,
      bathrooms: raw.bathrooms,
    };
  }

  private transformPhotos(photoUrls: string[]): ApartmentPhoto[] {
    if (!photoUrls.length)
      photoUrls.push('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400');

    return photoUrls.map((url, index) => ({
      id: `photo-${index + 1}`,
      url: url,
    }));
  }

  private transformPricing(price: number): Pricing {
    return {
      weekdayPrice: price,
      weekendPrice: Math.round(price * 1.2), // Пример: выходные на 20% дороже
    };
  }

  private getDefaultAccessibleEnvironment(): AccessibleEnvironment {
    // Заглушка - в реальном приложении эти данные должны приходить с бэкенда
    return {
      wifi: true,
      tv: true,
      kitchen: true,
      washer: false,
      airConditioning: true,
      parking: false,
    };
  }

  private getDefaultAmenities(): Amenities {
    // Заглушка - в реальном приложении эти данные должны приходить с бэкенда
    return {
      pool: false,
      piano: false,
      beachAccess: false,
      gym: false,
      billiards: false,
      grill: true,
    };
  }

  private getDefaultSafetyFeatures(): SafetyFeatures {
    // Заглушка - в реальном приложении эти данные должны приходить с бэкенда
    return {
      smokeDetector: true,
      fireExtinguisher: true,
      firstAidKit: true,
      securitySystem: false,
    };
  }

  private calculateAverageRating(): number {
    // Заглушка - в реальном приложении рейтинг должен приходить с бэкенда
    // Можно генерировать случайный рейтинг для демонстрации
    return Math.floor(Math.random() * 3) + 3; // Рейтинг от 3 до 5
  }
}

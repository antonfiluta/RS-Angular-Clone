import { OfferModel } from '../../../features/offers-overview/models/offers-overview.models';

export const basicOffer: OfferModel = {
  id: 'brest-1',
  hostId: 'host-14',
  title: 'Apartment near Brest Fortress',
  description: 'Convenient location near the historic Brest Fortress',
  propertyType: 'apartment',
  address: {
    country: 'Belarus',
    city: 'Brest',
    street: 'Fortress Area',
    building: '1',
    details: 'Apt 4, Floor 2',
  },
  capacity: {
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
  },
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
    firstAidKit: false,
    securitySystem: false,
  },
  photos: [
    {
      id: 'photo-14',
      url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400',
    },
  ],
  pricing: {
    weekdayPrice: 70,
    weekendPrice: 85,
  },
  isFavorite: false,
  averageRating: 4.7,
};

export interface OffersOverviewModel {
  cities: CityModel[];
}

export interface CityModel {
  name: string;
  offers: OfferModel[];
}

export interface OfferModel {
  id: string;
  name: string;
  img: string;
  cost: number;
  rate: number;
  isLiked: boolean;
  isFavorite: boolean;
  location: string;
  bedrooms: number;
  guests: number;
  description: string;
  amenities: string[];
  reviewsCount: number;
}

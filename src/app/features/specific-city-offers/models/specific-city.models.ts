export interface SpecificCityOffersModel {
  offers: SpecificCityOfferModel[];
}

export interface SpecificCityOfferModel {
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

export interface OffersOverview {
  cities: City[];
}

export interface City {
  name: string;
  offers: Offer[];
}

export interface Offer {
  id: string;
  name: string;
  img: string;
  cost: number;
  rate: number;
}

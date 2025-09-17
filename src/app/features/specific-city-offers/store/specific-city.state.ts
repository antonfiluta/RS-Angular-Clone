import { OfferModel } from '../../offers-overview/models/offers-overview.models';

export interface SpecificCityState {
  offers: OfferModel[] | null;
  cityName: string;
}

export const initialSpecificCityState: SpecificCityState = {
  offers: null,
  cityName: 'unknown',
};

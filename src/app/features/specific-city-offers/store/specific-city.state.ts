import { OfferModel } from '../../offers-overview/models/offers-overview.models';
import { SpecificCityOffersModel } from '../models/specific-city.models';

export interface SpecificCityState {
  offers: SpecificCityOffersModel | OfferModel[] | null;
  cityName: string;
}

export const initialSpecificCityState: SpecificCityState = {
  offers: null,
  cityName: 'unknown',
};

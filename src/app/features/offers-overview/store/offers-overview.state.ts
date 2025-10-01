import { CityOffersModel, OfferModel, OffersOverviewModel } from '../models/offers-overview.models';

export interface OffersOverviewState {
  offers: OffersOverviewModel | null;
  specificCityOffers: CityOffersModel | null;
  specificOffer: OfferModel | null;
}

export const initialOffersOverviewState: OffersOverviewState = {
  offers: null,
  specificCityOffers: null,
  specificOffer: null,
};

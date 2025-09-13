import { OffersOverviewModel } from '../models/offers-overview.models';

export interface OffersOverviewState {
  offers: OffersOverviewModel | null;
}

export const initialOffersOverviewState: OffersOverviewState = {
  offers: null,
};

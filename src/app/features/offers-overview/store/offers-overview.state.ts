import { OffersOverview } from '../models/offers-overview.models';

export interface OffersOverviewState {
  offers: OffersOverview | null;
}

export const initialOffersOverviewState: OffersOverviewState = {
  offers: null,
};

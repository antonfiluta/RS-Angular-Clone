import { createActionGroup, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { CityOffersModel, OfferModel, OffersOverviewModel } from '../models/offers-overview.models';
import { SearchFilters } from '../../search/components/search';

export const OffersOverviewActions = createActionGroup({
  source: 'Offers Overview',
  events: {
    'Load All Offers': props<{ filters: Partial<SearchFilters> }>(),
    'Load All Offers Success': props<{ offers: OffersOverviewModel }>(),
    'Load All Offers Failure': props<{ error: HttpErrorResponse }>(),

    'Load Specific City Offers': props<{ filters: Partial<SearchFilters> }>(),
    'Load Specific City Offers Success': props<{ response: CityOffersModel }>(),
    'Load Specific City Offers Failure': props<{ error: HttpErrorResponse }>(),

    'Load Specific Offer': props<{ cityId: string; offerId: string }>(),
    'Load Specific Offer Success': props<{ offer: OfferModel }>(),
    'Load Specific Offer Failure': props<{ error: HttpErrorResponse }>(),

    'Toggle Offer Like': props<{ cityId: string; offerId: string; isLiked: boolean }>(),
    'Toggle Offer Like Success': props<{ cityId: string; offer: OfferModel }>(),
    'Toggle Offer Like Failure': props<{ error: HttpErrorResponse }>(),
  },
});

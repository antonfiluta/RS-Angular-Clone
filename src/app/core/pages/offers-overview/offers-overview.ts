import { Component, inject } from '@angular/core';
import { OffersOverviewLayout } from '../../../features/offers-overview/components/offers-overview-layout/offers-overview-layout';
import { Store } from '@ngrx/store';
import { OffersOverviewActions } from '../../../features/offers-overview/store/offers-overview.actions';
import { Search, SearchFilters } from '../../../features/search/components/search';
import { FiltersTransformService } from '../../../features/offers-overview/services/filters-transform.service/filters-transform.service';

@Component({
  selector: 'app-offers-overview',
  imports: [OffersOverviewLayout, Search],
  templateUrl: './offers-overview.html',
  styleUrl: './offers-overview.scss',
})
export class OffersOverview {
  private readonly store = inject(Store);
  private readonly filtersTransformService = inject(FiltersTransformService);

  constructor() {
    this.store.dispatch(OffersOverviewActions.loadAllOffers({ filters: {} }));
  }

  public onSearchFilters(filters: SearchFilters) {
    this.store.dispatch(OffersOverviewActions.loadAllOffers({ filters }));
  }
}

import { Component, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { OffersOverviewList } from '../offers-overview-list/offers-overview-list';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { selectAllOffers } from '../../store/offers-overview.selector';

@Component({
  selector: 'app-offers-overview-layout',
  imports: [OffersOverviewList, RouterLink, TranslateModule],
  templateUrl: './offers-overview-layout.html',
  styleUrl: './offers-overview-layout.scss',
})
export class OffersOverviewLayout {
  private readonly store = inject(Store);

  public readonly offers = this.store.selectSignal(selectAllOffers);
  public readonly citiesOffers = computed(() =>
    this.offers()
      ?.cities.slice()
      .sort((list1, list2) => list2.offers.length - list1.offers.length),
  );
}

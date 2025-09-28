import { Component, input } from '@angular/core';
import { OfferModel } from '../../models/offers-overview.models';
import { OfferCard } from '../offer-card/offer-card';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-offers-overview-list',
  imports: [OfferCard, RouterLink, TranslateModule],
  templateUrl: './offers-overview-list.html',
  styleUrl: './offers-overview-list.scss',
})
export class OffersOverviewList {
  public readonly cityOffers = input.required<OfferModel[]>();
  public readonly cityName = input.required<string>();
}

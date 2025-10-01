import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SpecificOfferLayout } from '../../../features/specific-offer/components/specific-offer-layout/specific-offer-layout';
import { OffersOverviewActions } from '../../../features/offers-overview/store/offers-overview.actions';

@Component({
  selector: 'app-specific-offer-overview',
  imports: [SpecificOfferLayout],
  templateUrl: './specific-offer.html',
  styleUrl: './specific-offer.scss',
})
export class SpecificOffer implements OnInit {
  @Input() cityId!: string;
  @Input() offerId!: string;

  private readonly store = inject(Store);

  ngOnInit() {
    this.store.dispatch(
      OffersOverviewActions.loadSpecificOffer({ cityId: this.cityId, offerId: this.offerId }),
    );
  }
}

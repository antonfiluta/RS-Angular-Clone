import { Component, computed, input } from '@angular/core';
import { OfferModel } from '../../models/offers-overview.models';

@Component({
  selector: 'app-offer-card',
  imports: [],
  templateUrl: './offer-card.html',
  styleUrl: './offer-card.scss',
})
export class OfferCard {
  public readonly offer = input.required<OfferModel>();

  public readonly offerId = computed(() => this.offer().id);
  public readonly offerName = computed(() => this.offer().name);
  public readonly offerCost = computed(() => this.offer().cost);
  public readonly offerRate = computed(() => this.offer().rate);
  public readonly offerImg = computed(() => this.offer().img);
  public readonly isFavorite = computed(() => this.offer().isFavorite);
  public readonly isLiked = computed(() => this.offer().isLiked);
}

import { Component, computed, input } from '@angular/core';
import { OfferModel } from '../../models/offers-overview.models';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-offer-card',
  imports: [TranslateModule],
  templateUrl: './offer-card.html',
  styleUrl: './offer-card.scss',
})
export class OfferCard {
  public readonly offer = input.required<OfferModel>();

  public readonly offerId = computed(() => this.offer().id);
  public readonly offerName = computed(() => this.offer().title);
  public readonly offerCost = computed(() => this.offer().pricing.weekdayPrice);
  public readonly offerRate = computed(() => this.offer().averageRating);
  public readonly offerImg = computed(() => this.offer().photos?.[0] ?? '');
  public readonly isFavorite = computed(() => this.offer().isFavorite);
  public readonly isLiked = computed(() => false);
}

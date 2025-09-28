import { Component, computed, input, signal } from '@angular/core';
import { OfferModel } from '../../models/offers-overview.models';
import { TranslateModule } from '@ngx-translate/core';
import { AppSaveCardIconDirective } from '../../../../shared/directives/saveCardIcon/save-card-icon';

@Component({
  selector: 'app-offer-card',
  imports: [TranslateModule, AppSaveCardIconDirective],
  templateUrl: './offer-card.html',
  styleUrl: './offer-card.scss',
})
export class OfferCard {
  public readonly offer = input.required<OfferModel>();
  private readonly signalIsLiked = signal<boolean>(false);

  public readonly offerId = computed(() => this.offer().id);
  public readonly offerName = computed(() => this.offer().title);
  public readonly offerCost = computed(() => this.offer().pricing.weekdayPrice);
  public readonly offerRate = computed(() => this.offer().averageRating);
  public readonly offerImg = computed(() => this.offer().photos?.[0] ?? '');
  public readonly isFavorite = computed(() => this.offer().isFavorite);
  public readonly isLiked = computed(() => this.signalIsLiked());

  public toggleLike(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.signalIsLiked.update((value) => !value);
  }
}

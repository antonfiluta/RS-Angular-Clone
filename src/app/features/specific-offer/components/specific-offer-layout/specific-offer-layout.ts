import { Component, computed, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSpecificOffer } from '../../../offers-overview/store/offers-overview.selector';
import { OffersOverviewActions } from '../../../offers-overview/store/offers-overview.actions';
import { PhraseSlider } from '../../../../shared/ui/phrase-slider/phrase-slider';

@Component({
  selector: 'app-specific-offer-layout',
  imports: [PhraseSlider],
  templateUrl: './specific-offer-layout.html',
  styleUrl: './specific-offer-layout.scss',
})
export class SpecificOfferLayout implements OnInit {
  private readonly store = inject(Store);

  public readonly offer = this.store.selectSignal(selectSpecificOffer);

  public offerData = {
    name: computed(() => this.offer()?.name ?? 'undefind'),
    isLiked: computed(() => this.offer()?.isLiked ?? false),
    img: computed(() => this.offer()?.img ?? ''),
  };

  shareButtonContent = {
    icon1: 'pi pi-share-alt',
    icon2: 'pi pi-check-square',
    title1: 'Share',
    title2: 'Copied',
  };

  likeButtonContent = {
    icon1: 'pi pi-heart',
    icon2: 'pi pi-heart-fill',
    title1: 'Save',
    title2: 'Saved',
    fillIcon: 'red-600',
  };
  public fullUrl = '';
  public isLinkSaved = false;

  public copyLink(): void {
    navigator.clipboard.writeText(this.fullUrl);
    this.isLinkSaved = true;
  }

  public saveOffer(): void {
    this.store.dispatch(
      OffersOverviewActions.toggleOfferLike({ isLiked: !this.offerData.isLiked() }),
    );
  }

  ngOnInit(): void {
    this.fullUrl = window.location.href;
  }
}

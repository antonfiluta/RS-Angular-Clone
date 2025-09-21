import { Component, computed, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSpecificOffer } from '../../../offers-overview/store/offers-overview.selector';
import { OffersOverviewActions } from '../../../offers-overview/store/offers-overview.actions';
import { PhraseSlider } from '../../../../shared/ui/phrase-slider/phrase-slider';
import { likeButtonContent } from '../../utils/content';
import { LinkSaver } from '../../../../shared/ui/link-saver/link-saver';
import {
  AccessibleEnvironment,
  Amenities,
  PropertyType,
  SafetyFeatures,
} from '../../../offers-overview/models/offers-overview.models';
import { AddressFormatPipe } from '../../../../shared/pipes/address-format-pipe/address-format-pipe-pipe';

@Component({
  selector: 'app-specific-offer-layout',
  imports: [PhraseSlider, LinkSaver, AddressFormatPipe],
  templateUrl: './specific-offer-layout.html',
  styleUrl: './specific-offer-layout.scss',
})
export class SpecificOfferLayout {
  @Input() cityId = '';
  @Input() offerId = '';

  private readonly store = inject(Store);
  public readonly offer = this.store.selectSignal(selectSpecificOffer);

  protected likeButtonContent = likeButtonContent;
  protected reviewsAmount = Math.round(Math.random() * 1000);

  protected amenitiesList = computed(() => {
    const amenities = this.offer().amenities;
    const result: string[] = [];

    const amenityLabels = {
      pool: 'Swimming pool',
      piano: 'Piano',
      beachAccess: 'Beach access',
      gym: 'Gym',
      billiards: 'Billiards table',
      grill: 'Barbecue grill',
    };

    for (const key in amenities) {
      const amenityKey = key as keyof Amenities;
      if (amenities[amenityKey]) {
        result.push(amenityLabels[amenityKey]);
      }
    }

    return result;
  });

  protected accessibilityList = computed(() => {
    const accessibilities = this.offer().accessibleEnvironment;
    const result: string[] = [];

    const accessibilityLabels = {
      wifi: 'Wi-Fi Connection',
      tv: 'Television',
      kitchen: 'Kitchen',
      washer: 'Washer',
      airConditioning: 'Air Conditioning',
      parking: 'Parking',
    };

    for (const key in accessibilities) {
      const accessibilityKey = key as keyof AccessibleEnvironment;
      if (accessibilities[accessibilityKey]) {
        result.push(accessibilityLabels[accessibilityKey]);
      }
    }

    return result;
  });

  protected safetyFeaturesList = computed(() => {
    const safetyFeatures = this.offer().safetyFeatures;
    const result: string[] = [];

    const safetyFeatureLabels = {
      fireExtinguisher: 'Fire extinguisher',
      firstAidKit: 'First aid kit',
      securitySystem: 'Security system',
      smokeDetector: 'Smoke detector',
    };

    for (const key in safetyFeatures) {
      const safetyFeatureKey = key as keyof SafetyFeatures;
      if (safetyFeatures[safetyFeatureKey]) {
        result.push(safetyFeatureLabels[safetyFeatureKey]);
      }
    }

    return result;
  });

  protected capacityItems = computed(() => {
    const capacity = this.offer().capacity;
    return [
      {
        key: 'guests',
        icon: 'pi pi-users',
        value: capacity.maxGuests,
        label: capacity.maxGuests === 1 ? 'guest' : 'guests',
      },
      {
        key: 'bedrooms',
        icon: 'pi pi-address-book',
        value: capacity.bedrooms,
        label: capacity.bedrooms === 1 ? 'bedroom' : 'bedrooms',
      },
      {
        key: 'beds',
        icon: 'pi pi-inbox',
        value: capacity.beds,
        label: capacity.beds === 1 ? 'bed' : 'beds',
      },
      {
        key: 'bathrooms',
        icon: 'pi pi-lock',
        value: capacity.bathrooms,
        label: capacity.bathrooms === 1 ? 'bathroom' : 'bathrooms',
      },
    ];
  });

  protected getPropertyTypeLabel(type: PropertyType): string {
    const labels = {
      apartment: 'Entire apartment',
      part_apartment: 'Part of apartment',
      whole_house: 'Entire house',
      room: 'Private room',
      dormitory: 'Dormitory room',
      cabin: 'Entire cabin',
    };
    return labels[type];
  }

  protected saveOffer() {
    this.store.dispatch(
      OffersOverviewActions.toggleOfferLike({
        cityId: this.cityId,
        offerId: this.offerId,
        isLiked: true,
      }),
    );
  }
}

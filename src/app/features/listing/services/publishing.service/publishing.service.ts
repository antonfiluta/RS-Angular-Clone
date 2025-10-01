import { inject, Injectable } from '@angular/core';
import { OfferModel } from '../../../offers-overview/models/offers-overview.models';
import { OffersTransformerService } from '../../../offers-overview/services/offers-transformer.service/offers-transformer-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublishingService {
  private readonly offersTransformerService = inject(OffersTransformerService);
  private readonly http = inject(HttpClient);

  public publishApartment(apartment: OfferModel) {
    const rawAparment = this.offersTransformerService.transformOfferToRawApartment(apartment);

    const url = '/apartment';

    return this.http.post(url, rawAparment);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
// import { OffersOverviewModel } from '../../models/offers-overview.models';
import { sampleData } from '../../../../shared/utils/data/start-page';
import { toObservable } from '@angular/core/rxjs-interop';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OffersOverviewService {
  private http = inject(HttpClient);

  public getOffersOverview() {
    const signalForTestedFuncuanality = signal(sampleData);

    return toObservable(signalForTestedFuncuanality);
  }
  // public getOffersOverview() { //real functuanality
  // const url = '/offers';
  // return this.http.get<OffersOverviewModel>(url);
  // }

  public getSpecificCityOffers(cityID: string) {
    return of(null).pipe(
      map(() => {
        const city = sampleData.cities.find((city) => city.name === cityID);
        return {
          name: city?.name ?? '',
          offers: city?.offers ?? [],
        };
      }),
    );
  }
  // public getSpecificCityOffers(cityID: string) {
  //   const url = `/offers/${cityID}`;

  //   return this.http.get<SpecificCityState>(url);
  // }

  public getSpecificOffer(cityID: string, offerID: string) {
    return of(null).pipe(
      map(() => {
        const city = sampleData.cities.find((city) => city.name === cityID);
        if (!city) throw new Error('City not found');

        const offer = city.offers.find((offer) => offer.id === offerID);
        if (!offer) throw new Error('Offer not found');

        return offer;
      }),
    );
  }
  // public getSpecificOffer(cityID: string, offerID: string) {
  //   const url = `/offers/${cityID}/${offerID}`;

  //   return this.http.get<SpecificCityState>(url);
  // }
}

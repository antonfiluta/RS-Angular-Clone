import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
// import { OffersOverviewModel } from '../../models/offers-overview.models';
import { sampleData } from '../../../../shared/utils/data/start-page';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class OffersOverviewService {
  private http = inject(HttpClient);

  public getOffersOverview() {
    //tested functuanality
    const signalForTestedFuncuanality = signal(sampleData);

    return toObservable(signalForTestedFuncuanality);
  }

  // public getOffersOverview() { //real functuanality
  // const url = '/offers';
  // return this.http.get<OffersOverviewModel>(url);
  // }
}

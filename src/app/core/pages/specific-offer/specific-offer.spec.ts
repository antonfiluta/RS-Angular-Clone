import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SpecificOffer } from './specific-offer';
import { OffersOverviewActions } from '../../../features/offers-overview/store/offers-overview.actions';
import { OffersOverviewState } from '../../../features/offers-overview/store/offers-overview.state';
import { TranslateModule } from '@ngx-translate/core';

describe('SpecificOfferOverview', () => {
  let component: SpecificOffer;
  let fixture: ComponentFixture<SpecificOffer>;
  let store: MockStore;

  const initialState: { offersOverview: OffersOverviewState } = {
    offersOverview: {
      offers: null,
      specificCityOffers: null,
      specificOffer: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificOffer, TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(SpecificOffer);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadSpecificOffer on init', () => {
    component.cityId = 'berlin';
    component.offerId = '123';

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(
      OffersOverviewActions.loadSpecificOffer({
        cityId: 'berlin',
        offerId: '123',
      }),
    );
  });

  it('should have cityId and offerId inputs', () => {
    component.cityId = 'munich';
    component.offerId = '456';

    expect(component.cityId).toBe('munich');
    expect(component.offerId).toBe('456');
  });
});

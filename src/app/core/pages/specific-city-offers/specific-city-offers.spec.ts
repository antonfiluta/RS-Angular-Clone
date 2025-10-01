import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { SpecificCityOffers } from './specific-city-offers';
import { OffersOverviewActions } from '../../../features/offers-overview/store/offers-overview.actions';
import { OffersOverviewState } from '../../../features/offers-overview/store/offers-overview.state';
import { TranslateModule } from '@ngx-translate/core';

describe('SpecificCityOffers', () => {
  let component: SpecificCityOffers;
  let fixture: ComponentFixture<SpecificCityOffers>;
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
      imports: [SpecificCityOffers, TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState }), provideRouter([])],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(SpecificCityOffers);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadSpecificCityOffers on init when cityId is provided', () => {
    component.cityId = 'berlin';

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(
      OffersOverviewActions.loadSpecificCityOffers({
        filters: { city: 'berlin' },
      }),
    );
  });

  it('should not dispatch when cityId is not provided', () => {
    fixture.detectChanges();

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('should have cityId input', () => {
    component.cityId = 'munich';

    expect(component.cityId).toBe('munich');
  });
});

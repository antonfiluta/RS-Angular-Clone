import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { OffersOverview } from './offers-overview';
import { OffersOverviewActions } from '../../../features/offers-overview/store/offers-overview.actions';
import { SearchFilters } from '../../../features/search/components/search';
import { TranslateModule } from '@ngx-translate/core';
import { OffersOverviewState } from '../../../features/offers-overview/store/offers-overview.state';

describe('OffersOverview', () => {
  let component: OffersOverview;
  let fixture: ComponentFixture<OffersOverview>;
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
      imports: [OffersOverview, TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(OffersOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadAllOffers on init', () => {
    expect(store.dispatch).toHaveBeenCalledWith(
      OffersOverviewActions.loadAllOffers({ filters: {} }),
    );
  });

  it('should dispatch loadAllOffers with filters', () => {
    const filters: SearchFilters = {
      city: 'Berlin',
      minGuests: 2,
      maxPrice: 150,
      page: 1,
      limit: 10,
    };

    component.onSearchFilters(filters);

    expect(store.dispatch).toHaveBeenCalledWith(OffersOverviewActions.loadAllOffers({ filters }));
  });
});

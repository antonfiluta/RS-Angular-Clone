import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { Search } from './search';

describe('Search', () => {
  let component: Search;
  let fixture: ComponentFixture<Search>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Search, TranslateModule.forRoot()],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Search);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter cities when typing in the city input', fakeAsync(() => {
    component.onCityInput({ target: { value: 'ber' } } as unknown as Event);
    tick(300);
    expect(component.filteredCities).toContain('Berlin, Germany');
    expect(component.showCityDropdown).toBeTrue();
  }));

  it('should select a city and close dropdown', () => {
    component.selectCity('Paris, France');
    expect(component.searchFilters.city).toBe('Paris, France');
    expect(component.showCityDropdown).toBeFalse();
    expect(component.filteredCities.length).toBe(0);
  });

  it('should clear individual fields', () => {
    component.searchFilters.city = 'London, UK';
    component.searchFilters.minGuests = 3;
    component.searchFilters.maxPrice = 500;

    component.clearField('city');
    expect(component.searchFilters.city).toBe('');
    component.clearField('minGuests');
    expect(component.searchFilters.minGuests).toBeNull();
    component.clearField('maxPrice');
    expect(component.searchFilters.maxPrice).toBeNull();
  });

  it('should clear all filters and emit event', () => {
    spyOn(component.searchListing, 'emit');
    component.clearAllFilters();
    expect(component.searchFilters).toEqual({
      city: '',
      minGuests: null,
      maxPrice: null,
      page: 1,
      limit: 12,
    });
    expect(component.searchListing.emit).toHaveBeenCalledWith(component.searchFilters);
  });

  it('should emit search on onSearch()', () => {
    spyOn(component.searchListing, 'emit');
    component.searchFilters.city = 'Rome, Italy';
    component.onSearch();
    expect(component.searchListing.emit).toHaveBeenCalledWith(component.searchFilters);
    expect(component.showCityDropdown).toBeFalse();
  });

  it('should apply quick filters correctly', () => {
    spyOn(component, 'onSearch');
    component.applyQuickFilter('europe');
    expect(component.searchFilters.city).toBe('Europe');
    component.applyQuickFilter('budget');
    expect(component.searchFilters.maxPrice).toBe(100);
    component.applyQuickFilter('family');
    expect(component.searchFilters.minGuests).toBe(4);
    expect(component.onSearch).toHaveBeenCalledTimes(3);
  });
});

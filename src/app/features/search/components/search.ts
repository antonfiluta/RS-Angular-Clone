import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

export interface SearchFilters {
  city: string;
  minGuests: number | null;
  maxPrice: number | null;
  page: number;
  limit: number;
}

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit, OnDestroy {
  @Output() searchListing = new EventEmitter<SearchFilters>();

  searchFilters: SearchFilters = {
    city: '',
    minGuests: null,
    maxPrice: null,
    page: 1,
    limit: 12,
  };

  showCityDropdown = false;
  filteredCities: string[] = [];
  private citySearchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  // Mock cities for autocomplete
  private readonly mockCities: string[] = [
    'New York, USA',
    'Paris, France',
    'London, UK',
    'Tokyo, Japan',
    'Barcelona, Spain',
    'Amsterdam, Netherlands',
    'Rome, Italy',
    'Berlin, Germany',
    'Prague, Czech Republic',
    'Vienna, Austria',
    'Budapest, Hungary',
    'Copenhagen, Denmark',
    'Stockholm, Sweden',
    'Dublin, Ireland',
    'Lisbon, Portugal',
  ];

  ngOnInit(): void {
    // Setup debounced city search
    this.citySearchSubject
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((searchTerm) => {
        this.filterCities(searchTerm);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onCityInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.searchFilters.city = value;
    this.showCityDropdown = value.length > 0;
    this.citySearchSubject.next(value);
  }

  private filterCities(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.filteredCities = [];
      this.showCityDropdown = false;
      return;
    }

    this.filteredCities = this.mockCities
      .filter((city) => city.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 8);
  }

  selectCity(city: string): void {
    this.searchFilters.city = city;
    this.showCityDropdown = false;
    this.filteredCities = [];
  }

  clearField(field: keyof SearchFilters): void {
    switch (field) {
      case 'city':
        this.searchFilters.city = '';
        this.showCityDropdown = false;
        this.filteredCities = [];
        break;
      case 'minGuests':
        this.searchFilters.minGuests = null;
        break;
      case 'maxPrice':
        this.searchFilters.maxPrice = null;
        break;
    }
  }

  onSearch(): void {
    // Reset to first page when new search is performed
    this.searchFilters.page = 1;

    // Emit search filters
    this.search.emit({ ...this.searchFilters });

    // Hide city dropdown
    this.showCityDropdown = false;

    console.log('Searching with filters:', this.searchFilters);
  }

  applyQuickFilter(filterType: string): void {
    switch (filterType) {
      case 'europe':
        this.searchFilters.city = 'Europe';
        break;
      case 'budget':
        this.searchFilters.maxPrice = 100;
        break;
      case 'family':
        this.searchFilters.minGuests = 4;
        break;
    }
    this.onSearch();
  }

  clearAllFilters(): void {
    this.searchFilters = {
      city: '',
      minGuests: null,
      maxPrice: null,
      page: 1,
      limit: 12,
    };
    this.showCityDropdown = false;
    this.filteredCities = [];

    // Emit cleared filters
    this.search.emit({ ...this.searchFilters });
  }

  onCityKeydown(event: KeyboardEvent, city: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectCity(city);
    }
  }

  onClearKeydown(event: KeyboardEvent, field: keyof SearchFilters): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.clearField(field);
    }
  }

  onSearchKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onSearch();
    }
  }

  onQuickFilterKeydown(event: KeyboardEvent, filterType: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (filterType === 'clear') {
        this.clearAllFilters();
      } else {
        this.applyQuickFilter(filterType);
      }
    }
  }

  // Handle click outside to close dropdown
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.showCityDropdown = false;
    }
  }
}

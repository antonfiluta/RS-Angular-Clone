import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCityOffersOverview } from './specific-city-offers-overview';

describe('SpecificCityOffersOverview', () => {
  let component: SpecificCityOffersOverview;
  let fixture: ComponentFixture<SpecificCityOffersOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificCityOffersOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificCityOffersOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecificCityOffers } from './specific-city-offers';

describe('SpecificCityOffers', () => {
  let component: SpecificCityOffers;
  let fixture: ComponentFixture<SpecificCityOffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificCityOffers],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificCityOffers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

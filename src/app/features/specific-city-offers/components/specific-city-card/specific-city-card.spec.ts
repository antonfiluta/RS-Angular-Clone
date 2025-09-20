import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCityCard } from './specific-city-card';

describe('SpecificCityCard', () => {
  let component: SpecificCityCard;
  let fixture: ComponentFixture<SpecificCityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificCityCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificCityCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

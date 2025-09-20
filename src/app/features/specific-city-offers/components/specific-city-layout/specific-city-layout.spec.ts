import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCityLayout } from './specific-city-layout';

describe('SpecificCityLayout', () => {
  let component: SpecificCityLayout;
  let fixture: ComponentFixture<SpecificCityLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificCityLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificCityLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

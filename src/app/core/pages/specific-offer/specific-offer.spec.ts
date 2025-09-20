import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificOffer } from './specific-offer';

describe('SpecificOfferOverview', () => {
  let component: SpecificOffer;
  let fixture: ComponentFixture<SpecificOffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificOffer],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificOffer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

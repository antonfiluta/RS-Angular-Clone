import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificOfferOverview } from './specific-offer-overview';

describe('SpecificOfferOverview', () => {
  let component: SpecificOfferOverview;
  let fixture: ComponentFixture<SpecificOfferOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificOfferOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificOfferOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

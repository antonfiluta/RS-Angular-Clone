import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificOfferLayout } from './specific-offer-layout';

describe('SpecificOfferLayout', () => {
  let component: SpecificOfferLayout;
  let fixture: ComponentFixture<SpecificOfferLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificOfferLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificOfferLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

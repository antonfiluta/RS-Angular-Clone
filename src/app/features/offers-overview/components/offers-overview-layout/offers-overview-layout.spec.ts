import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersOverviewLayout } from './offers-overview-layout';

describe('OffersOverviewLayout', () => {
  let component: OffersOverviewLayout;
  let fixture: ComponentFixture<OffersOverviewLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersOverviewLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(OffersOverviewLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

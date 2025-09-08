import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersOverview } from './offers-overview';

describe('OffersOverview', () => {
  let component: OffersOverview;
  let fixture: ComponentFixture<OffersOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(OffersOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

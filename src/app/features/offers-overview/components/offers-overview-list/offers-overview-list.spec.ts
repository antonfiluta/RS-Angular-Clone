import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersOverviewList } from './offers-overview-list';

describe('OffersOverviewList', () => {
  let component: OffersOverviewList;
  let fixture: ComponentFixture<OffersOverviewList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersOverviewList],
    }).compileComponents();

    fixture = TestBed.createComponent(OffersOverviewList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

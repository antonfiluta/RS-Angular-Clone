import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { OffersOverviewLayout } from './offers-overview-layout';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('OffersOverviewLayout', () => {
  let component: OffersOverviewLayout;
  let fixture: ComponentFixture<OffersOverviewLayout>;

  const mockStore = {
    select: jasmine.createSpy('select').and.returnValue(of({ cities: [] })),
    selectSignal: jasmine.createSpy('selectSignal').and.returnValue(() => ({ cities: [] })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersOverviewLayout, TranslateModule.forRoot()],
      providers: [{ provide: Store, useValue: mockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(OffersOverviewLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

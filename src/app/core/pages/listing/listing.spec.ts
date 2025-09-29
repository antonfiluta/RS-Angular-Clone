import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { Listing } from './listing';
import { provideMockStore } from '@ngrx/store/testing';

describe('Listing', () => {
  let component: Listing;
  let fixture: ComponentFixture<Listing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing, TranslateModule.forRoot()],
      providers: [provideHttpClient(), provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(Listing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render create-listing component', () => {
    const compiled = fixture.nativeElement;
    const createListing = compiled.querySelector('app-create-listing');

    expect(createListing).toBeTruthy();
  });
});

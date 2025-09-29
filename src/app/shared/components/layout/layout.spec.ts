import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideStore, Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { signal } from '@angular/core';
import { Layout } from './layout';
import { ThemeService } from '../../../core/services/theme-service/theme.service';

describe('Layout', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(async () => {
    const mockThemeService = {
      init: jasmine.createSpy('init'),
      toggle: jasmine.createSpy('toggle'),
      current: 'light' as 'light' | 'dark',
    };

    await TestBed.configureTestingModule({
      imports: [Layout, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideStore({}),
        { provide: ThemeService, useValue: mockThemeService },
      ],
    }).compileComponents();

    const store = TestBed.inject(Store);
    spyOn(store, 'selectSignal').and.returnValue(signal(false));

    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  it('should render footer component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should render router outlet', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});

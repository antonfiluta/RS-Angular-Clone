import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideStore, Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { signal } from '@angular/core';
import { Header } from './header';
import { ThemeService } from '../../../core/services/theme-service/theme.service';
import { AuthActions } from '../../../features/auth/store/auth.actions';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let store: Store;
  let translateService: TranslateService;
  let themeService: ThemeService;

  beforeEach(async () => {
    const mockThemeService = {
      init: jasmine.createSpy('init'),
      toggle: jasmine.createSpy('toggle'),
      current: 'light' as 'light' | 'dark',
    };

    await TestBed.configureTestingModule({
      imports: [Header, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideStore({}),
        { provide: ThemeService, useValue: mockThemeService },
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
    translateService = TestBed.inject(TranslateService);
    themeService = TestBed.inject(ThemeService);

    spyOn(store, 'selectSignal').and.returnValue(signal(false));
    spyOn(store, 'dispatch');
    spyOn(translateService, 'use');
    spyOn(translateService, 'getCurrentLang').and.returnValue('en');

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 languages', () => {
    expect(component.languages.length).toBe(5);
    expect(component.languages[0].code).toBe('en');
  });

  it('should initialize with default language', () => {
    expect(component.currentLanguage).toBe('en');
  });

  it('should toggle menu', () => {
    expect(component.menuOpen).toBeFalsy();

    component.toggleMenu();
    expect(component.menuOpen).toBeTruthy();

    component.toggleMenu();
    expect(component.menuOpen).toBeFalsy();
  });

  it('should close language menu when opening main menu', () => {
    component.languageMenuOpen = true;
    component.toggleMenu();

    expect(component.menuOpen).toBeTruthy();
    expect(component.languageMenuOpen).toBeFalsy();
  });

  it('should toggle language menu', () => {
    expect(component.languageMenuOpen).toBeFalsy();

    component.toggleLanguageMenu();
    expect(component.languageMenuOpen).toBeTruthy();

    component.toggleLanguageMenu();
    expect(component.languageMenuOpen).toBeFalsy();
  });

  it('should close main menu when opening language menu', () => {
    component.menuOpen = true;
    component.toggleLanguageMenu();

    expect(component.languageMenuOpen).toBeTruthy();
    expect(component.menuOpen).toBeFalsy();
  });

  it('should close all menus', () => {
    component.menuOpen = true;
    component.languageMenuOpen = true;

    component.closeAllMenus();

    expect(component.menuOpen).toBeFalsy();
    expect(component.languageMenuOpen).toBeFalsy();
  });

  it('should select language', () => {
    component.selectLanguage('de');

    expect(component.currentLanguage).toBe('de');
    expect(translateService.use).toHaveBeenCalledWith('de');
    expect(component.menuOpen).toBeFalsy();
    expect(component.languageMenuOpen).toBeFalsy();
  });

  it('should toggle theme', () => {
    component.toggleTheme();

    expect(themeService.toggle).toHaveBeenCalled();
  });

  it('should dispatch logout action', () => {
    component.logout();

    expect(store.dispatch).toHaveBeenCalledWith(AuthActions.logoutUser());
    expect(component.menuOpen).toBeFalsy();
    expect(component.languageMenuOpen).toBeFalsy();
  });

  it('should initialize theme service', () => {
    expect(themeService.init).toHaveBeenCalled();
  });
});

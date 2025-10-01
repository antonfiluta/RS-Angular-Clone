import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { LocalStorage } from './core/services/local-storage-service/local-storage';
import { ThemeService } from './core/services/theme-service/theme.service';
import { AuthActions } from './features/auth/store/auth.actions';
import { AuthResponse, GENDER, ROLE } from './features/auth/models/auth.models';

describe('App', () => {
  let mockLocalStorage: jasmine.SpyObj<LocalStorage>;
  let mockThemeService: jasmine.SpyObj<ThemeService>;
  let store: MockStore;
  let translateService: TranslateService;

  beforeEach(async () => {
    mockLocalStorage = jasmine.createSpyObj('LocalStorage', ['getItem']);
    mockThemeService = jasmine.createSpyObj('ThemeService', ['init']);
    mockLocalStorage.getItem.and.returnValue(null);

    await TestBed.configureTestingModule({
      imports: [App, TranslateModule.forRoot()],
      providers: [
        provideMockStore({}),
        provideRouter([]),
        { provide: LocalStorage, useValue: mockLocalStorage },
        { provide: ThemeService, useValue: mockThemeService },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    translateService = TestBed.inject(TranslateService);
    spyOn(store, 'dispatch');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize translation service', () => {
    spyOn(translateService, 'addLangs');
    spyOn(translateService, 'setFallbackLang');
    spyOn(translateService, 'use');

    TestBed.createComponent(App);

    expect(translateService.addLangs).toHaveBeenCalledWith(['en', 'de', 'ru', 'ua', 'by']);
    expect(translateService.setFallbackLang).toHaveBeenCalledWith('en');
    expect(translateService.use).toHaveBeenCalledWith('en');
  });

  it('should initialize theme service', () => {
    TestBed.createComponent(App);

    expect(mockThemeService.init).toHaveBeenCalled();
  });

  it('should dispatch initUserSession when user data exists', () => {
    const mockAuthData: AuthResponse = {
      user: {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        role: ROLE.USER,
        aboutMe: 'Test bio',
        birthday: new Date('1990-01-01'),
        gender: GENDER.MALE,
        phone: '+1234567890',
        interests: ['travel', 'cooking'],
        myCountries: ['USA', 'France'],
        myLanguages: ['English', 'Spanish'],
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
      tokens: { accessToken: 'access-token', refreshToken: 'refresh-token' },
    };
    mockLocalStorage.getItem.and.returnValue(mockAuthData);

    TestBed.createComponent(App);

    expect(store.dispatch).toHaveBeenCalledWith(
      AuthActions.initUserSession({ authResponse: mockAuthData }),
    );
  });

  it('should not dispatch when no user data exists', () => {
    mockLocalStorage.getItem.and.returnValue(null);

    TestBed.createComponent(App);

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('should switch language', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    spyOn(translateService, 'use');

    app.switchLanguage('de');

    expect(translateService.use).toHaveBeenCalledWith('de');
  });
});

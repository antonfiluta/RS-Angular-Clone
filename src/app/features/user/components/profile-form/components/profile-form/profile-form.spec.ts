import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore, Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { signal } from '@angular/core';
import { ProfileForm } from './profile-form';
import { A11yAnnouncerService } from '../../../../../../core/services/a11y-announcer-service/a11y-announcer.service';
import { User, GENDER, ROLE } from '../../../../../auth/models/auth.models';

describe('ProfileForm', () => {
  let component: ProfileForm;
  let fixture: ComponentFixture<ProfileForm>;
  let store: Store;

  const mockUser: User = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileForm, TranslateModule.forRoot()],
      providers: [
        provideStore({
          user: () => ({ user: mockUser }),
        }),
        A11yAnnouncerService,
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
    spyOn(store, 'selectSignal').and.returnValue(signal(mockUser));
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(ProfileForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with 4 fields', () => {
    expect(component.form.get('bio')).toBeTruthy();
    expect(component.form.get('interests')).toBeTruthy();
    expect(component.form.get('languages')).toBeTruthy();
    expect(component.form.get('countriesLived')).toBeTruthy();
  });

  it('should fill form with user data', () => {
    expect(component.form.get('bio')?.value).toBe('Test bio');
    expect(component.form.get('interests')?.value).toEqual(['travel', 'cooking']);
  });

  it('should enter edit mode', () => {
    component.startEdit();
    expect(component.isEditMode).toBeTruthy();
  });

  it('should cancel edit', () => {
    component.startEdit();
    component.cancelEdit();
    expect(component.isEditMode).toBeFalsy();
  });

  it('should save valid form', () => {
    component.saveEdit();
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should have options arrays', () => {
    expect(component.interestOptions).toBeDefined();
    expect(component.languageOptions).toBeDefined();
    expect(component.countryOptions).toBeDefined();
  });
});

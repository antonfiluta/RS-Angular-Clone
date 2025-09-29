import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore, Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { signal } from '@angular/core';
import { PersonalInfoForm } from './personal-info-form';
import { FormValidationService } from '../../../../../../shared/services/form-validation-service/form-validation-service';
import { A11yAnnouncerService } from '../../../../../../core/services/a11y-announcer-service/a11y-announcer.service';
import { GENDER, ROLE, User } from '../../../../../auth/models/auth.models';

describe('PersonalInfoForm', () => {
  let component: PersonalInfoForm;
  let fixture: ComponentFixture<PersonalInfoForm>;
  let store: Store;

  const mockUser: User = {
    _id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    birthday: new Date('1990-01-01'),
    gender: GENDER.MALE,
    password: 'password123',
    role: ROLE.USER,
    aboutMe: '',
    interests: [],
    myCountries: [],
    myLanguages: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfoForm, TranslateModule.forRoot()],
      providers: [
        provideStore({
          user: () => ({ user: mockUser }), // Provide user feature state
        }),
        FormValidationService,
        A11yAnnouncerService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoForm);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    // Mock selectSignal to return the user
    const selectSignalSpy = spyOn(store, 'selectSignal');
    selectSignalSpy.and.returnValue(signal(mockUser));

    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with 6 fields', () => {
    expect(component.form.get('firstName')).toBeTruthy();
    expect(component.form.get('lastName')).toBeTruthy();
    expect(component.form.get('email')).toBeTruthy();
    expect(component.form.get('phone')).toBeTruthy();
    expect(component.form.get('dob')).toBeTruthy();
    expect(component.form.get('gender')).toBeTruthy();
  });

  it('should validate required fields', () => {
    const firstName = component.form.get('firstName');
    firstName?.setValue('');
    firstName?.markAsTouched();
    expect(firstName?.invalid).toBeTruthy();

    firstName?.setValue('John');
    expect(firstName?.valid).toBeTruthy();
  });

  it('should detect empty field', () => {
    component.form.get('phone')?.setValue('');
    expect(component.isEmpty('phone')).toBeTruthy();

    component.form.get('phone')?.setValue('+1234567890');
    expect(component.isEmpty('phone')).toBeFalsy();
  });

  it('should return correct action label', () => {
    component.form.get('phone')?.setValue('');
    expect(component.getActionLabel('phone')).toBe('Add');

    component.form.get('phone')?.setValue('+1234567890');
    expect(component.getActionLabel('phone')).toBe('Edit');
  });

  it('should edit field and store original value', () => {
    component.form.get('firstName')?.setValue('John');
    component.editField('firstName');

    expect(component.editFieldName).toBe('firstName');
    expect(component['originals']['firstName']).toBe('John');
  });

  it('should cancel edit and restore value', () => {
    component.form.get('firstName')?.setValue('John');
    component.editField('firstName');

    component.form.get('firstName')?.setValue('Jane');
    component.cancelEdit('firstName');

    expect(component.editFieldName).toBeNull();
  });

  it('should not save invalid field', () => {
    component.form.get('email')?.setValue('invalid-email');
    component.saveField('email');

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(component.form.get('email')?.touched).toBeTruthy();
  });
});

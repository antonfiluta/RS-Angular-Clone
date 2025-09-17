import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileRow } from '../../../../shared/ui/profile-row/profile-row';
import {
  INTEREST_OPTIONS,
  LANGUAGE_OPTIONS,
  COUNTRY_OPTIONS,
} from '../../constants/profile-options';

export interface ProfileData {
  name: string;
  bio: string;
  interests: string[];
  languages: string[];
  countriesLived: string[];
}

@Component({
  selector: 'app-profile-form',
  imports: [CommonModule, ReactiveFormsModule, ProfileRow, TranslateModule],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.scss',
})
export class ProfileForm implements OnInit {
  @Input() initialData?: ProfileData;
  @Output() profileSaved = new EventEmitter<ProfileData>();

  form: FormGroup;
  isEditMode = false;
  private originalData?: ProfileData;
  private fb = inject(FormBuilder);

  interestOptions = INTEREST_OPTIONS;
  languageOptions = LANGUAGE_OPTIONS;
  countryOptions = COUNTRY_OPTIONS;

  constructor() {
    this.form = this.fb.group({
      name: ['', { validators: [Validators.required], nonNullable: true }],
      bio: ['', { nonNullable: true }],
      interests: [[] as string[], { nonNullable: true }],
      languages: [[] as string[], { nonNullable: true }],
      countriesLived: [[] as string[], { nonNullable: true }],
    });
  }

  ngOnInit() {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    const mockData: ProfileData = {
      name: 'Svitlana G.',
      bio: 'Love hosting travellers and exploring new cultures!',
      interests: ['cooking', 'hiking', 'photography', 'reading'],
      languages: ['english', 'ukrainian', 'german'],
      countriesLived: ['germany', 'france', 'thailand'],
    };

    this.originalData = { ...mockData };
    this.form.patchValue(mockData);
  }

  toggleEditMode(): void {
    this.isEditMode = true;
  }

  cancelEdit(): void {
    this.isEditMode = false;
    if (this.originalData) {
      this.form.patchValue(this.originalData);
    }
  }

  saveProfile(): void {
    if (this.form.valid) {
      const profileData = this.form.value as ProfileData;
      this.originalData = { ...profileData };
      this.profileSaved.emit(profileData);
      this.isEditMode = false;
      console.log('Profile saved:', profileData);
    } else {
      this.form.markAllAsTouched();
    }
  }
}

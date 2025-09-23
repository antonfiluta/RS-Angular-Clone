import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileRow } from '../../../../shared/ui/profile-row/profile-row';
import { INTEREST_OPTIONS, LANGUAGE_OPTIONS, COUNTRY_OPTIONS } from '../../utils/profile-options';
import { ProfileData } from '../../models/profile-form.models';
import { EditButton } from '../edit-button/edit-button';

@Component({
  selector: 'app-profile-form',
  imports: [CommonModule, ReactiveFormsModule, ProfileRow, TranslateModule, EditButton],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.scss',
})
export class ProfileForm {
  private fb = inject(FormBuilder);

  public form: FormGroup;
  public isEditMode = false;
  public interestOptions = INTEREST_OPTIONS;
  public languageOptions = LANGUAGE_OPTIONS;
  public countryOptions = COUNTRY_OPTIONS;

  public startEdit(): void {
    this.isEditMode = true;
  }

  public cancelEdit(): void {
    this.isEditMode = false;
  }

  public saveEdit(): void {
    if (this.form.valid) {
      const profileData = this.form.value as ProfileData;
      this.isEditMode = false;
      console.log('Profile saved:', profileData);
    } else {
      this.form.markAllAsTouched();
    }
  }

  constructor() {
    this.form = this.fb.group({
      bio: ['', { nonNullable: true }],
      interests: [[] as string[], { nonNullable: true }],
      languages: [[] as string[], { nonNullable: true }],
      countriesLived: [[] as string[], { nonNullable: true }],
    });
  }
}

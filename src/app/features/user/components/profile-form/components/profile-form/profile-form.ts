import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { INTEREST_OPTIONS, LANGUAGE_OPTIONS, COUNTRY_OPTIONS } from '../../utils/profile-options';
import { EditButton } from '../edit-button/edit-button';
import { ProfileRow } from '../../../../../../shared/ui/profile-row/profile-row';
import { User } from '../../../../models/profile-form.models';
import { Store } from '@ngrx/store';
import { selectUser } from '../../../../store/user.selector';
import { UserActions } from '../../../../store/user.actions';

@Component({
  selector: 'app-profile-form',
  imports: [CommonModule, ReactiveFormsModule, ProfileRow, TranslateModule, EditButton],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.scss',
})
export class ProfileForm {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);

  private readonly user = this.store.selectSignal(selectUser);

  public form: FormGroup = this.fb.group({
    bio: ['', { nonNullable: true }],
    interests: [[], { nonNullable: true }],
    languages: [[], { nonNullable: true }],
    countriesLived: [[], { nonNullable: true }],
  });

  public isEditMode = false;
  public interestOptions = INTEREST_OPTIONS;
  public languageOptions = LANGUAGE_OPTIONS;
  public countryOptions = COUNTRY_OPTIONS;

  public startEdit(): void {
    this.isEditMode = true;
  }

  public cancelEdit(): void {
    this.fillForm();
    this.isEditMode = false;
  }

  public saveEdit(): void {
    const user = this.user();
    const profileData = this.form.value;

    if (this.form.valid && user) {
      this.isEditMode = false;

      const updatedUser: User = {
        ...user,
        profile: {
          ...user.profile,
          aboutMe: profileData.bio,
          characteristics: profileData.interests.map((interest: string) => ({
            icon: 'heart',
            content: interest,
            placeholder: '',
          })),
          languages: profileData.languages,
          countries: profileData.countriesLived,
        },
      };

      this.store.dispatch(UserActions.editUser({ user: updatedUser }));
    } else {
      this.form.markAllAsTouched();
    }
  }

  private fillForm(): void {
    const user = this.user();

    if (!user) {
      return;
    }

    this.form.patchValue({
      bio: user.profile.aboutMe ?? '',
      interests: user.profile.characteristics?.map((item) => item.content) ?? [],
      languages: user.profile.languages ?? [],
      countriesLived: user.profile.countries ?? [],
    });
  }

  constructor() {
    this.fillForm();
  }
}

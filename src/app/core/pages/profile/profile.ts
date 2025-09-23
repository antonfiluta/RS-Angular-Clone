import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileForm } from '../../../features/profile-form/components/profile-form/profile-form';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ProfileForm, TranslateModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private readonly store = inject(Store);
}

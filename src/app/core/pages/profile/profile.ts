import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ProfileForm,
  ProfileData,
} from '../../../features/profile-form/components/profile-form/profile-form';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ProfileForm, TranslateModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  onProfileSaved(profileData: ProfileData): void {
    console.log('Profile data received in page:', profileData);
    // TODO: Add toast notification here
  }
}

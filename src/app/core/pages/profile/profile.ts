import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileForm } from '../../../features/user/components/profile-form/components/profile-form/profile-form';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ProfileForm, TranslateModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {}

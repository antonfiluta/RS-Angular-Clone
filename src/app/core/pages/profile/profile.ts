import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileForm } from '../../../features/profile-form/components/profile-form/profile-form';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ProfileForm],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {}

import { Component } from '@angular/core';
import { PersonalInfoForm } from '../../../features/edit-personal-info/components/personal-info-form/personal-info-form';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [PersonalInfoForm],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.scss',
})
export class PersonalInfo {}

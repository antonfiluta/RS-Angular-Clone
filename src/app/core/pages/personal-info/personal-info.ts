import { Component } from '@angular/core';
import { PersonalInfoForm } from '../../../features/personal-info-form/components/personal-info-form/personal-info-form';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [PersonalInfoForm, TranslateModule],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.scss',
})
export class PersonalInfo {}

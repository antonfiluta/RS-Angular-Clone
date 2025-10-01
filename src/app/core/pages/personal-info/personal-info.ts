import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PersonalInfoForm } from '../../../features/user/components/personal-info-form/components/personal-info-form/personal-info-form';

@Component({
  selector: 'app-personal-info',
  imports: [PersonalInfoForm, TranslateModule],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.scss',
})
export class PersonalInfo {}

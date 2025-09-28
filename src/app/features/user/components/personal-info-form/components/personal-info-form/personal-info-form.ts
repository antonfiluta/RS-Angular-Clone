import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PersonalInfoRowComponent } from '../../../../../../shared/ui/personal-info-row/personal-info-row.component';
import { FormValidationService } from '../../../../../../shared/services/form-validation-service/form-validation-service';
import {
  minimumAgeValidator,
  nameValidator,
  notFutureDateValidator,
  phoneValidator,
  requiredFieldValidator,
  strongEmailValidator,
} from '../../../../../../shared/utils/form-validators/form-validators';
import { ValidationSignal } from '../../../../../../shared/types/validation.types';
import { Store } from '@ngrx/store';
import { FormField } from '../../../../models/personal-info.models';
import { selectUser } from '../../../../store/user.selector';
import { UserActions } from '../../../../store/user.actions';
import { User } from '../../../../../auth/models/auth.models';

@Component({
  selector: 'app-personal-info-form',
  imports: [CommonModule, ReactiveFormsModule, PersonalInfoRowComponent, TranslateModule],
  templateUrl: './personal-info-form.html',
  styleUrl: './personal-info-form.scss',
})
export class PersonalInfoForm {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);
  private readonly translate = inject(TranslateService);
  private readonly validationService = inject(FormValidationService);

  private readonly user = this.store.selectSignal(selectUser);
  private originals: Record<string, string> = {};
  private validationSignals: Record<string, ValidationSignal> = {};
  public editFieldName: string | null = null;

  public form: FormGroup = this.fb.group({
    firstName: [
      '',
      [
        requiredFieldValidator('First name'),
        nameValidator(),
        Validators.minLength(2),
        Validators.maxLength(50),
      ],
    ],
    lastName: [
      '',
      [
        requiredFieldValidator('Last name'),
        nameValidator(),
        Validators.minLength(2),
        Validators.maxLength(50),
      ],
    ],
    email: ['', [requiredFieldValidator('Email'), strongEmailValidator()]],
    phone: ['', [phoneValidator(), Validators.minLength(10)]],
    dob: [
      '',
      [requiredFieldValidator('Date of birth'), notFutureDateValidator(), minimumAgeValidator(18)],
    ],
    gender: ['', [requiredFieldValidator('Gender')]],
  });

  public formFields: FormField[] = [
    { key: 'firstName', title: 'PERSONAL_INFO.FIRST_NAME' },
    { key: 'lastName', title: 'PERSONAL_INFO.LAST_NAME' },
    { key: 'email', title: 'PERSONAL_INFO.EMAIL', type: 'email', sub: 'PERSONAL_INFO.EMAIL_SUB' },
    { key: 'phone', title: 'PERSONAL_INFO.PHONE' },
    { key: 'dob', title: 'PERSONAL_INFO.DOB', type: 'date' },
    {
      key: 'gender',
      title: 'PERSONAL_INFO.GENDER',
      type: 'select',
      options: [
        'PERSONAL_INFO.GENDER_OPTIONS.MALE',
        'PERSONAL_INFO.GENDER_OPTIONS.FEMALE',
        'PERSONAL_INFO.GENDER_OPTIONS.OTHER',
      ],
    },
  ];

  private initializeValidationSignals(): void {
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.get(key);
      if (control) {
        this.validationSignals[key] = {
          invalid: this.validationService.isFieldInvalid(control),
          error: this.validationService.getFieldError(control),
        };
      }
    });
  }

  private saveEdit() {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      const user = this.user();

      if (formData && user) {
        const updatedUser: User = {
          ...user,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          birthday: formData.dob,
          gender: formData.gender,
          phone: formData.phone,
        };

        this.store.dispatch(UserActions.editUser({ user: updatedUser }));
      }
    }
  }

  private storeOriginals(): void {
    const user = this.user();
    if (!user) {
      return;
    }
    this.form.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      dob: user.birthday,
      gender: user.gender,
    });
  }

  public isEmpty(field: string): boolean {
    const value = this.form.get(field)?.value;
    return !value || value.toString().trim() === '';
  }

  public getActionLabel(field: string): 'Add' | 'Edit' {
    return this.isEmpty(field) ? 'Add' : 'Edit';
  }

  public isFieldInvalid(field: string): boolean {
    const signal = this.validationSignals[field]?.invalid;
    return signal ? signal() : false;
  }

  public getFieldError(field: string): string {
    const error = this.validationSignals[field]?.error?.();
    if (!error) return '';

    return typeof error === 'string' ? error : error.message;
  }

  public editField(field: string): void {
    this.originals[field] = this.form.get(field)?.value ?? '';
    this.editFieldName = field;
  }

  public cancelEdit(field: string): void {
    const control = this.form.get(field);
    control?.setValue(this.originals[field] ?? '');
    control?.markAsPristine();
    control?.markAsUntouched();
    this.editFieldName = null;

    this.storeOriginals();
  }

  public saveField(field: string): void {
    const control = this.form.get(field);

    if (!control) return;

    if (control.valid) {
      this.originals[field] = control.value ?? '';
      this.editFieldName = null;
      this.saveEdit();
      control.markAsPristine();
      control.markAsUntouched();
    } else {
      control.markAsTouched();
    }
  }

  public getControl(field: string): FormControl {
    return this.form.get(field) as FormControl;
  }

  public getTranslatedOptions(field: FormField): string[] {
    return field.options?.map((opt) => this.translate.instant(opt)) || [];
  }

  constructor() {
    this.storeOriginals();
    this.initializeValidationSignals();
  }
}

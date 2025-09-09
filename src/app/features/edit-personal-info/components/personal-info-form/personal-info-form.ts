import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { PersonalInfoRowComponent } from '../../../../shared/ui/personal-info-row/personal-info-row.component';
import { FormValidationService } from '../../../../shared/services/form-validation-service/form-validation-service';
import {
  nameValidator,
  phoneValidator,
  minimumAgeValidator,
  notFutureDateValidator,
  strongEmailValidator,
  requiredFieldValidator,
} from '../../../../shared/utils/form-validators/form-validators';
import { ValidationSignal } from '../../../../shared/types/validation.types';

interface FormField {
  key: string;
  title: string;
  type?: 'text' | 'email' | 'date' | 'select';
  sub?: string;
  options?: string[];
}

@Component({
  selector: 'app-personal-info-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PersonalInfoRowComponent],
  templateUrl: './personal-info-form.html',
  styleUrl: './personal-info-form.scss',
})
export class PersonalInfoForm {
  private fb = inject(FormBuilder);
  public validationService = inject(FormValidationService);

  form: FormGroup = this.fb.group({
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

  editFieldName: string | null = null;
  private originals: Record<string, string> = {};
  private validationSignals: Record<string, ValidationSignal> = {};

  readonly formFields: FormField[] = [
    { key: 'firstName', title: 'First name' },
    { key: 'lastName', title: 'Last name' },
    {
      key: 'email',
      title: 'Email address',
      type: 'email',
      sub: "Use an address you'll always have access to.",
    },
    { key: 'phone', title: 'Phone' },
    { key: 'dob', title: 'Date of birth', type: 'date' },
    {
      key: 'gender',
      title: 'Gender',
      type: 'select',
      options: ['Male', 'Female', 'Other'],
    },
  ];

  constructor() {
    this.storeOriginals();
    this.initializeValidationSignals();
  }

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

  private storeOriginals(): void {
    Object.keys(this.form.controls).forEach((key) => {
      this.originals[key] = this.form.get(key)?.value ?? '';
    });
  }

  isEmpty(field: string): boolean {
    const value = this.form.get(field)?.value;
    return !value || value.toString().trim() === '';
  }

  getActionLabel(field: string): 'Add' | 'Edit' {
    return this.isEmpty(field) ? 'Add' : 'Edit';
  }

  isFieldInvalid(field: string): boolean {
    const signal = this.validationSignals[field]?.invalid;
    return signal ? signal() : false;
  }

  getFieldError(field: string): string {
    const error = this.validationSignals[field]?.error?.();
    if (!error) return '';

    return typeof error === 'string' ? error : error.message;
  }

  editField(field: string): void {
    this.originals[field] = this.form.get(field)?.value ?? '';
    this.editFieldName = field;
  }

  cancelEdit(field: string): void {
    const control = this.form.get(field);
    control?.setValue(this.originals[field] ?? '');
    control?.markAsPristine();
    control?.markAsUntouched();
    this.editFieldName = null;
  }

  saveField(field: string): void {
    const control = this.form.get(field);

    if (!control) return;

    if (control.valid) {
      this.originals[field] = control.value ?? '';
      this.editFieldName = null;
      // TODO: call API to persist the field
      console.log(`Saved ${field}:`, control.value);
      control.markAsPristine();
      control.markAsUntouched();
    } else {
      control?.markAsTouched();
    }
  }

  getControl(field: string): FormControl {
    return this.form.get(field) as FormControl;
  }

  trackByField(index: number, field: FormField): string {
    return field.key;
  }
}

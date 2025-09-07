import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProfileRowComponent } from '../../../../shared/ui/profile-row/profile-row.component';

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
  imports: [CommonModule, ReactiveFormsModule, ProfileRowComponent],
  templateUrl: './personal-info-form.html',
  styleUrls: ['./personal-info-form.scss'],
})
export class PersonalInfoForm {
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: [''],
    dob: [''],
    gender: [''],
  });

  editFieldName: string | null = null;
  private originals: Record<string, string> = {};

  // Configuration for form fields
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

  editField(field: string): void {
    this.originals[field] = this.form.get(field)?.value ?? '';
    this.editFieldName = field;
  }

  cancelEdit(field: string): void {
    this.form.get(field)?.setValue(this.originals[field] ?? '');
    this.editFieldName = null;
  }

  saveField(field: string): void {
    this.originals[field] = this.form.get(field)?.value ?? '';
    this.editFieldName = null;
  }

  getControl(field: string): FormControl {
    return this.form.get(field) as FormControl;
  }
}

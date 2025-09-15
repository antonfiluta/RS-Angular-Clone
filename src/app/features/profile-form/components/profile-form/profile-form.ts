import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.scss',
})
export class ProfileForm {
  form: FormGroup;
  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      name: this.fb.control<string>('', { validators: Validators.required, nonNullable: true }),
      bio: this.fb.control<string>('', { nonNullable: true }),
      interests: this.fb.array<FormControl<string>>([]),
      languages: this.fb.array<FormControl<string>>([]),
      placesLived: this.fb.array<FormControl<string>>([]),
    });

    this.patchInitialData();
  }

  // --- Getters with correct types ---
  get interests(): FormArray<FormControl<string>> {
    return this.form.get('interests') as FormArray<FormControl<string>>;
  }

  get languages(): FormArray<FormControl<string>> {
    return this.form.get('languages') as FormArray<FormControl<string>>;
  }

  get placesLived(): FormArray<FormControl<string>> {
    return this.form.get('placesLived') as FormArray<FormControl<string>>;
  }

  // --- Add & remove dynamic controls ---
  addControl(array: FormArray<FormControl<string>>): void {
    console.log(array);
    // array.push(new FormControl<string>(''));
  }

  removeControl(array: FormArray<FormControl<string>>, index: number): void {
    array.removeAt(index);
  }

  // --- Submit handler ---
  submit(): void {
    if (this.form.valid) {
      console.log('Profile data', this.form.value);
      // TODO: call ProfileService.save(...)
    } else {
      this.form.markAllAsTouched();
    }
  }

  // --- Mock initial data for demo ---
  private patchInitialData(): void {
    const mock = {
      name: 'Jane Doe',
      bio: 'Love hosting travellers!',
      interests: ['Cooking', 'Hiking'],
      languages: ['English', 'Spanish'],
      placesLived: ['Berlin', 'Lisbon'],
    };

    this.form.patchValue({
      name: mock.name,
      bio: mock.bio,
    });

    // mock.interests.forEach((i) => this.interests.push(this.fb.control<string>(i)));
    // mock.languages.forEach((l) => this.languages.push(this.fb.control<string>(l)));
    // mock.placesLived.forEach((p) => this.placesLived.push(this.fb.control<string>(p)));
  }
}

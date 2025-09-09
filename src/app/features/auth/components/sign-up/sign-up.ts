import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../shared/services/form-validation-service/form-validation-service';
import {
  forbiddenWordsValidator,
  passwordStrengthValidator,
} from '../../../../shared/utils/form-validators/form-validators';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  private fb = inject(FormBuilder);
  private formValidationService = inject(FormValidationService);

  public signUpForm = this.fb.group({
    lastname: [
      '',
      [Validators.required, Validators.maxLength(30), forbiddenWordsValidator(['admin', 'user'])],
    ],
    firstname: [
      '',
      [Validators.required, Validators.maxLength(30), forbiddenWordsValidator(['admin', 'user'])],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), passwordStrengthValidator()]],
  });

  public formStatus = {
    isFormInvalid: this.formValidationService.isFormInvalid(this.signUpForm),

    fieldsValid: {
      isLastnameInvalid: this.formValidationService.isFieldInvalid(this.signUpForm.get('lastname')),
      isFirstnameInvalid: this.formValidationService.isFieldInvalid(
        this.signUpForm.get('firstname'),
      ),
      isEmailInvalid: this.formValidationService.isFieldInvalid(this.signUpForm.get('email')),
      isPasswordInvalid: this.formValidationService.isFieldInvalid(this.signUpForm.get('password')),
    },

    fieldsErrors: {
      lastnameError: this.formValidationService.getFieldError(this.signUpForm.get('lastname')),
      firstnameError: this.formValidationService.getFieldError(this.signUpForm.get('firstname')),
      emailError: this.formValidationService.getFieldError(this.signUpForm.get('email')),
      passwordError: this.formValidationService.getFieldError(this.signUpForm.get('password')),
    },
  };

  public clearForm() {
    this.signUpForm.reset();
    this.signUpForm.markAsPristine();
    this.signUpForm.markAsUntouched();
  }

  onSubmit() {
    this.signUpForm.markAsTouched();
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }
}

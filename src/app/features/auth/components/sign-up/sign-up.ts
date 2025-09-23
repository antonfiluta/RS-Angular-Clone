import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../shared/services/form-validation-service/form-validation-service';
import {
  forbiddenWordsValidator,
  passwordStrengthValidator,
} from '../../../../shared/utils/form-validators/form-validators';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/auth.actions';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);
  private readonly formValidationService = inject(FormValidationService);

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

  public onSubmit() {
    this.signUpForm.markAsTouched();
    if (this.signUpForm.valid) {
      const formValue = this.signUpForm.getRawValue();
      const credentials = {
        lastname: formValue.lastname ?? '',
        firstname: formValue.firstname ?? '',
        email: formValue.email ?? '',
        password: formValue.password ?? '',
      };
      this.store.dispatch(AuthActions.registerUser({ credentials }));
    }
  }
}

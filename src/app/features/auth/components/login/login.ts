import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../shared/services/form-validation-service/form-validation-service';
import { passwordStrengthValidator } from '../../../../shared/utils/form-validators/form-validators';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private formValidationService = inject(FormValidationService);

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), passwordStrengthValidator()]],
  });

  public formStatus = {
    isFormInvalid: this.formValidationService.isFormInvalid(this.loginForm),

    fieldsValid: {
      isEmailInvalid: this.formValidationService.isFieldInvalid(this.loginForm.get('email')),
      isPasswordInvalid: this.formValidationService.isFieldInvalid(this.loginForm.get('password')),
    },

    fieldsErrors: {
      emailError: this.formValidationService.getFieldError(this.loginForm.get('email')),
      passwordError: this.formValidationService.getFieldError(this.loginForm.get('password')),
    },
  };

  public clearForm() {
    this.loginForm.reset();
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
  }

  onSubmit() {
    this.loginForm.markAsTouched();
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}

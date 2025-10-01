import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SignUp } from './sign-up';
import { FormValidationService } from '../../../../shared/services/form-validation-service/form-validation-service';

describe('SignUp', () => {
  let component: SignUp;
  let fixture: ComponentFixture<SignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUp, TranslateModule.forRoot()],
      providers: [provideStore({}), FormValidationService],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sign-up form with email and password controls', () => {
    expect(component.signUpForm.get('email')).toBeTruthy();
    expect(component.signUpForm.get('password')).toBeTruthy();
  });

  it('should mark form as invalid when empty', () => {
    expect(component.signUpForm.valid).toBeFalse();
  });
});

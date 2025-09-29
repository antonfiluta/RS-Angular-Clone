import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormValidationService } from './form-validation-service';

describe('FormValidationService', () => {
  let service: FormValidationService;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [FormValidationService],
    });

    service = TestBed.inject(FormValidationService);
    translateService = TestBed.inject(TranslateService);

    spyOn(translateService, 'instant').and.returnValue('Validation error');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw error if control is null', () => {
    TestBed.runInInjectionContext(() => {
      expect(() => service.isFieldInvalid(null)).toThrowError('Control not found');
    });
  });

  it('should return false for valid pristine control', () => {
    TestBed.runInInjectionContext(() => {
      const control = new FormControl('test', [Validators.required]);
      const signal = service.isFieldInvalid(control);

      expect(signal()).toBeFalsy();
    });
  });

  it('should return true for invalid touched control', () => {
    TestBed.runInInjectionContext(() => {
      const control = new FormControl('', [Validators.required]);
      control.markAsDirty();

      const signal = service.isFieldInvalid(control);

      expect(signal()).toBeTruthy();
    });
  });

  it('should return error message for invalid control', () => {
    TestBed.runInInjectionContext(() => {
      const control = new FormControl('', [Validators.required]);
      control.markAsTouched();

      const errorSignal = service.getFieldError(control);

      expect(translateService.instant).toHaveBeenCalled();
      expect(errorSignal()).toBeTruthy();
    });
  });

  it('should return empty string for valid control', () => {
    TestBed.runInInjectionContext(() => {
      const control = new FormControl('test', [Validators.required]);

      const errorSignal = service.getFieldError(control);

      expect(errorSignal()).toBe('');
    });
  });

  it('should check form validity', () => {
    TestBed.runInInjectionContext(() => {
      const form = new FormGroup({
        email: new FormControl('', [Validators.required]),
      });

      const signal = service.isFormInvalid(form);

      expect(signal()).toBeTruthy();
    });
  });

  it('should return false for valid form', () => {
    TestBed.runInInjectionContext(() => {
      const form = new FormGroup({
        email: new FormControl('test@example.com', [Validators.required]),
      });

      const signal = service.isFormInvalid(form);

      expect(signal()).toBeFalsy();
    });
  });
});

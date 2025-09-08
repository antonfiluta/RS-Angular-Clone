export const errorMessages: Record<string, string> = {
  required: '{field} is required',
  email: 'Please enter a valid email address',
  invalidDomain: 'Email domain is not valid',
  minlength: 'Minimum length is {requiredLength} characters',
  maxlength: 'Maximum length is {requiredLength} characters',
  missingUpperCase: 'At least one uppercase letter required',
  missingLowerCase: 'At least one lowercase letter required',
  missingNumber: 'At least one number required',
  missingSpecialChar: 'At least one special character required',
  forbiddenWord: 'Contains forbidden word: {value}',
  pattern: 'Invalid format',

  invalidName: 'Name can only contain letters, spaces, and hyphens',
  invalidPhone: 'Please enter a valid phone number',
  minimumAge: 'You must be at least {required} years old',
  futureDate: 'Date cannot be in the future',
  invalidGender: 'Please select a valid gender option',
};

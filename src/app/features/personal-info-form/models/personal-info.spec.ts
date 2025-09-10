import { TestBed } from '@angular/core/testing';

import { PersonalInfo } from './personal-info';

describe('PersonalInfoForm', () => {
  let service: PersonalInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

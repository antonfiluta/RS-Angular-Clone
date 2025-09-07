import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignUpSwitcher } from './login-sign-up-switcher';

describe('LoginSignUpSwitcher', () => {
  let component: LoginSignUpSwitcher;
  let fixture: ComponentFixture<LoginSignUpSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignUpSwitcher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignUpSwitcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

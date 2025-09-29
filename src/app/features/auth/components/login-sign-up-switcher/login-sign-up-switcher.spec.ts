import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoginSignUpSwitcher } from './login-sign-up-switcher';

describe('LoginSignUpSwitcher', () => {
  let component: LoginSignUpSwitcher;
  let fixture: ComponentFixture<LoginSignUpSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignUpSwitcher, TranslateModule.forRoot()],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSignUpSwitcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

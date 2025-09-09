import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginSignUpSwitcher } from '../../../features/auth/components/login-sign-up-switcher/login-sign-up-switcher';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, LoginSignUpSwitcher],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {}

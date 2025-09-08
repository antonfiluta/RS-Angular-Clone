import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login-sign-up-switcher',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login-sign-up-switcher.html',
  styleUrl: './login-sign-up-switcher.scss',
})
export class LoginSignUpSwitcher {}

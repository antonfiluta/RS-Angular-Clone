import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login-sign-up-switcher',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './login-sign-up-switcher.html',
  styleUrl: './login-sign-up-switcher.scss',
})
export class LoginSignUpSwitcher {}

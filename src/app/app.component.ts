import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VERSION } from 'src/app/app.constants';
import { AccountService } from 'src/app/core/auth/account.service';
import { LoginService } from 'src/app/core/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testClient';

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private router: Router
  ) {

  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginService.login();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['']);
  }
}

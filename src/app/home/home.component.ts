import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from 'src/app/core/login/login.service';
import { AccountService } from 'src/app/core/auth/account.service';
import { Account } from 'src/app/core/user/account.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  title = 'Home Module';

  account: Account | null = null;

  constructor(private accountService: AccountService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => {
      this.account = account;
      console.log('this. account', account);
    });
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginService.login();
  }

}

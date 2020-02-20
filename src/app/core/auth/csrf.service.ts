import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({ providedIn: 'root' })
export class CSRFService {
  constructor(private cookieService: CookieService) { }

  getCSRF(name = 'XSRF-TOKEN'): string {
    return this.cookieService.get(name);
  }
}

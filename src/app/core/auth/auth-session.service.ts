import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'src/app/app.constants';
import { Logout } from 'src/app/core/login/logout.model';
import { CSRFService } from '../auth/csrf.service';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor(private http: HttpClient, private csrfService: CSRFService) { }

  logout(): Observable<Logout> {
    var token = this.csrfService.getCSRF();

    const options = {
      headers: new HttpHeaders().append('X-XSRF-TOKEN', token)
    }

    return this.http.post<Logout>(SERVER_API_URL + 'api/logout', {}, options);
  }
}

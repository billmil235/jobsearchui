import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// https://www.techiediaries.com/auth-login-signup-angular-18/
// https://jasonwatmore.com/post/2022/11/29/angular-14-user-registration-and-login-example-tutorial

export class UsersService {
  baseUrl = '/api';

  constructor(private httpClient: HttpClient) { }

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, data)
      .pipe(tap((result: any) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }

  logout() {
    localStorage.removeItem('authUser');
  }
}

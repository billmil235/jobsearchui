import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatedUser } from '../../Models/Users/authenticated-user.interface';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// https://www.techiediaries.com/auth-login-signup-angular-18/
// https://jasonwatmore.com/post/2022/11/29/angular-14-user-registration-and-login-example-tutorial

export class UsersService {
  baseUrl = '/api';

  constructor(private httpClient: HttpClient) { }

  login(data: any) {
    return this.httpClient.post<AuthenticatedUser>(`${this.baseUrl}/Login`, data)
      .pipe(tap((result: any) => {
        localStorage.setItem('token', result.token);
      }));
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    return token !== null;
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  logout() {
    localStorage.removeItem('token');
  }
}

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { UsersService } from './Users/users.service';

@Injectable({
  providedIn: 'root'
})

export class JwtInterceptor implements HttpInterceptor {

  constructor(private usersService: UsersService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    debugger;
    // add auth header with jwt if user is logged in and request is to the api url
    if (this.usersService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.usersService.getToken()}`
        }
      });
    }

    return next.handle(request);
  }
}

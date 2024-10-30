import { HttpInterceptorFn } from '@angular/common/http';
import { UsersService } from './Users/users.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (request, next) => {
  const usersService = inject(UsersService);

  if (usersService.isLoggedIn()) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${usersService.getToken()}`
      }
    });
  }

  return next(request);
}

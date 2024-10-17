import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UsersService } from './Users/users.service';

const  authService  =  inject(UsersService);
const  router  =  inject(Router);

export const authGuard: CanActivateFn = (route, state) => {
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};

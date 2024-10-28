import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './Users/users.service';

export const authGuard: CanActivateFn = (route, state) => {
  const  authService  =  inject(UsersService);
  const  router  =  inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};

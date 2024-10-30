import { Routes } from '@angular/router';
import {LoginComponent} from './Components/Users/login-component/login.component';
import {UserRegistrationComponent} from './Components/Users/user-registration/user-registration.component';
import {authGuard} from './Services/auth.guard';
import {JobSearchComponent} from './Components/Search/job-search/job-search.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/jobsearch', pathMatch: 'full',
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'logout', component: LoginComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: UserRegistrationComponent
  },
  {
    path: 'jobsearch', component: JobSearchComponent, canActivate: [authGuard]
  }
];

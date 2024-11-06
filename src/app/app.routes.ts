import { Routes } from '@angular/router';
import {LoginComponent} from './Components/Users/login-component/login.component';
import {UserRegistrationComponent} from './Components/Users/user-registration/user-registration.component';
import {authGuard} from './Services/auth.guard';
import {JobSearchComponent} from './Components/Search/job-search/job-search.component';
import {NewJobSearchComponent} from './Components/Search/new-job-search/new-job-search.component';
import {SearchManagerComponent} from './Components/Search/search-manager/search-manager.component';
import {EditApplicationComponent} from './Components/Application/edit-application/edit-application.component';

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
  },
  {
    path: 'managesearch/:searchId', component: SearchManagerComponent, canActivate: [authGuard]
  },
  {
    path: 'edit-application/:searchId', component: EditApplicationComponent, canActivate: [authGuard]
  }
];

import { Routes } from '@angular/router';
import {LoginComponent} from './Components/Users/login-component/login.component';
import {UserRegistrationComponent} from './Components/Users/user-registration/user-registration.component';
import {authGuard} from './Services/auth.guard';
import {JobSearchComponent} from './Components/Search/job-search/job-search.component';
import {SearchManagerComponent} from './Components/Search/search-manager/search-manager.component';
import {EditApplicationComponent} from './Components/Application/add-application/edit-application.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/job-search', pathMatch: 'full',
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'logout', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: UserRegistrationComponent
  },
  {
    path: 'job-search', component: JobSearchComponent, canActivate: [authGuard]
  },
  {
    path: 'manage-search/:searchId', component: SearchManagerComponent, canActivate: [authGuard]
  },
  {
    path: 'edit-application', component: EditApplicationComponent, canActivate: [authGuard]
  }
];

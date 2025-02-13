import { Component } from '@angular/core';
import { UsersService } from '../../../Services/Users/users.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, formatDate} from '@angular/common';
import {User} from '../../../Models/Users/user.interface';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  userForm = new FormGroup({
    UserName: new FormControl(),
    FirstName: new FormControl(),
    LastName: new FormControl(),
    Password: new FormControl(),
    ConfirmPassword: new FormControl(),
    DateOfBirth: new FormControl(),
  });

  constructor(private route: ActivatedRoute,
              private userService: UsersService,
              private router: Router) {}

  createNewUser() {
    let user: User = {
      username: this.userForm.value.UserName,
      firstName: this.userForm.value.FirstName,
      lastName: this.userForm.value.LastName,
      password: this.userForm.value.Password,
      dateOfBirth: new Date(formatDate(this.userForm.value.DateOfBirth, 'yyyy-MM-dd', 'en-US'))
    }

    this.userService.register(user).subscribe();

    this.router.navigate(['/']);
  }

  cancelCreateNewUser(): void {
    this.router.navigate(['/']);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../Services/Users/users.service';

@Component({
  selector: 'app-login-commponent',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class LoginComponentComponent {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private usersService: UsersService) { }

  login(): void {
    this.usersService.login({username: this.loginForm.value.username, password: this.loginForm.value.password });
  }
}

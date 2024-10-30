import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../Services/Users/users.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private usersService: UsersService, private router: Router) { }

  login(): void {
    this.usersService.login({username: this.loginForm.value.username, password: this.loginForm.value.password })
      .subscribe((data: any) => {
        if(this.usersService.isLoggedIn()){
          this.router.navigate(['/jobsearch']);
        }
        console.log(data);
      });
  }
}

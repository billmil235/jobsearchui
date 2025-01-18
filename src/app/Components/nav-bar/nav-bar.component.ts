import { Component } from '@angular/core';
import {UsersService} from '../../Services/Users/users.service';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private usersService: UsersService) {}

  showMenuElements(): boolean {
    return this.usersService.isLoggedIn();
  }
}

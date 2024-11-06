import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css'
})
export class ApplicationListComponent {
  @Input() searchName!: string;
  @Input() searchId!: string;

  // https://medium.com/@ernestomancebo/native-html-dialog-in-angular-with-dialog-polyfill-2b99f5e2f4ae
  constructor(private router: Router) {
  }

  createNewApplication() {
    this.router.navigate(['/edit-application', this.searchId]);
  }
}

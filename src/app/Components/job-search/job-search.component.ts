import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterModule],
  selector: 'app-job-search',
  standalone: true,
  styleUrl: './job-search.component.css',
  templateUrl: './job-search.component.html'
})
export class JobSearchComponent {

}

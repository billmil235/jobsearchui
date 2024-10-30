import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, RouterOutlet} from '@angular/router';
import {JobSearchListComponent} from '../job-search-list/job-search-list.component';

@Component({
  imports: [ReactiveFormsModule, RouterModule, JobSearchListComponent],
  selector: 'app-job-search',
  standalone: true,
  styleUrl: './job-search.component.css',
  templateUrl: './job-search.component.html'
})
export class JobSearchComponent {

}

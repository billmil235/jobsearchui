import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-application',
  standalone: true,
  imports: [],
  templateUrl: './edit-application.component.html',
  styleUrl: './edit-application.component.css'
})
export class EditApplicationComponent implements OnInit {
  searchId: string | undefined;
  applicationId: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route && this.route.queryParams) {
      this.route.params.subscribe((params) => {
        this.searchId = params['searchId'];
        this.applicationId = params['applicationId'];
      });
    }

    if(this.applicationId) {
      // TODO: retrieve application details from the API
    }
  }
}

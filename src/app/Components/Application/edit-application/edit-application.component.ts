import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LookupService} from '../../../Services/lookup.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-edit-application',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './edit-application.component.html',
  styleUrl: './edit-application.component.css',
  providers: [LookupService]
})
export class EditApplicationComponent implements OnInit {
  searchId: string | undefined;
  applicationId: string | undefined;

  constructor(private route: ActivatedRoute, public lookupService: LookupService) {}

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

  protected readonly LookupService = LookupService;
}

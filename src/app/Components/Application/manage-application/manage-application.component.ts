import {Component, OnInit} from '@angular/core';
import {LookupService} from '../../../Services/lookup.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationService} from '../../../Services/Application/application.service';

@Component({
  selector: 'app-manage-application',
  standalone: true,
  imports: [],
  templateUrl: './manage-application.component.html',
  styleUrl: './manage-application.component.css',
  providers: [LookupService]
})
export class ManageApplicationComponent implements OnInit {
  applicationId: string | undefined;

  constructor(private route: ActivatedRoute,
              private applicationService: ApplicationService,
              private router: Router,
              public lookupService: LookupService) {}

  ngOnInit() {
    if (this.route && this.route.queryParams) {
      this.route.params.subscribe((params) => {
        this.applicationId = params['applicationId'];
      });
    }
  }
}

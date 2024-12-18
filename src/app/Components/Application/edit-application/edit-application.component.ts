import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LookupService} from '../../../Services/lookup.service';
import {formatDate, NgForOf} from '@angular/common';
import {Application} from '../../../Models/Search/application.interface';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ApplicationService} from '../../../Services/Searches/application.service';

@Component({
  selector: 'app-edit-application',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-application.component.html',
  styleUrl: './edit-application.component.css',
  providers: [LookupService]
})
export class EditApplicationComponent implements OnInit {
  searchId: string = '';
  applicationId: string | undefined;

  applicationForm = new FormGroup({
    companyName: new FormControl(),
    companyWebSite: new FormControl(),
    applicationTypeId: new FormControl(),
    applicationSourceTypeId: new FormControl(),
  });

  constructor(private route: ActivatedRoute,
              private applicationService: ApplicationService,
              public lookupService: LookupService) {}

  ngOnInit() {
    if (this.route && this.route.queryParams) {
      this.route.params.subscribe((params) => {
        this.searchId = params['searchId'];
        this.applicationId = params['applicationId'];
      });
    }

    if(this.applicationId) {
      let application = this.applicationService.getApplication(this.applicationId);
    }
  }

  createNewApplication() {
    let application: Application = {
      applicationId: undefined,
      searchId: this.searchId,
      companyName: this.applicationForm.value.companyName,
      companyWebSite: this.applicationForm.value.companyWebSite,
      applicationTypeId: this.applicationForm.value.applicationTypeId,
      applicationSourceTypeId: this.applicationForm.value.applicationSourceTypeId,
      applicationDate: new Date(formatDate(new Date(), 'yyyy-MM-dd', 'en-US'))
    }

    this.applicationService.createApplication(application).subscribe();
  }

  protected readonly LookupService = LookupService;
}

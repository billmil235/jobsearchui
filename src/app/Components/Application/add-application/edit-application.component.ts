import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LookupService} from '../../../Services/lookup.service';
import {formatDate, NgForOf} from '@angular/common';
import {Application} from '../../../Models/Application/application.interface';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ApplicationService} from '../../../Services/Application/application.service';

@Component({
  selector: 'app-edit-manage-application',
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
    applicationId: new FormControl(),
    searchId: new FormControl(),
    applicationDate: new FormControl(),
    companyName: new FormControl(),
    companyWebSite: new FormControl(),
    applicationTypeId: new FormControl(),
    applicationSourceTypeId: new FormControl(),
    lowSalary: new FormControl(),
    highSalary: new FormControl(),
    requestedSalary: new FormControl(),
    jobTitle: new FormControl(),
  });

  constructor(private route: ActivatedRoute,
              private applicationService: ApplicationService,
              private router: Router,
              public lookupService: LookupService) {
  }

  ngOnInit() {
    if (this.route && this.route.queryParams) {
      this.route.params.subscribe((params) => {
        this.searchId = params['searchId'];
        this.applicationId = params['applicationId'];
      });
    }

    if (this.applicationId) {
      this.applicationService.getApplication(this.applicationId).subscribe(data => {
        this.applicationForm.setValue(data);
      });
    }
  }

  saveApplication() {
    if (this.applicationForm.value.applicationId == undefined) {
      this.createNewApplication();
    }
    else {
      this.updateExistingApplication();
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
      applicationDate: new Date(formatDate(new Date(), 'yyyy-MM-dd', 'en-US')),
      lowSalary: this.applicationForm.value.lowSalary,
      highSalary: this.applicationForm.value.highSalary,
      requestedSalary: this.applicationForm.value.requestedSalary,
      jobTitle: this.applicationForm.value.jobTitle
    };

    this.applicationService.createApplication(application).subscribe();

    this.router.navigate(['/manage-search', this.searchId]);
  }

  updateExistingApplication() {
    let application: Application = {
      applicationId: this.applicationForm.value.applicationId,
      searchId: this.searchId,
      companyName: this.applicationForm.value.companyName,
      companyWebSite: this.applicationForm.value.companyWebSite,
      applicationTypeId: this.applicationForm.value.applicationTypeId,
      applicationSourceTypeId: this.applicationForm.value.applicationSourceTypeId,
      applicationDate: this.applicationForm.value.applicationDate,
      lowSalary: this.applicationForm.value.lowSalary,
      highSalary: this.applicationForm.value.highSalary,
      requestedSalary: this.applicationForm.value.requestedSalary,
      jobTitle: this.applicationForm.value.jobTitle
    };

    this.applicationService.updateApplication(application).subscribe();
  }

  cancelApplication(): void {
    this.router.navigate(['/manage-search', this.searchId]);
  }

  protected readonly LookupService = LookupService;
}

import {Component, Input, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';
import {Router} from '@angular/router';
import {ApplicationService} from '../../../Services/Searches/application.service';
import {Application} from '../../../Models/Search/application.interface';
import {producerUpdatesAllowed} from '@angular/core/primitives/signals';
import {LookupService} from '../../../Services/lookup.service';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css'
})
export class ApplicationListComponent implements OnInit {
  @Input() searchName!: string;
  @Input() searchId!: string;

  applicationList: Application[] | undefined;

  // https://medium.com/@ernestomancebo/native-html-dialog-in-angular-with-dialog-polyfill-2b99f5e2f4ae
  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private lookupService: LookupService) { }

  ngOnInit() {
    this.applicationService.listApplications(this.searchId)
    .subscribe(data => {
      this.applicationList = data;
    });
  }

  createNewApplication() {
    this.router.navigate(['/edit-application', this.searchId]);
  }

  convertApplicationTypeIdToString(applicationTypeId: number): string {
    let applicationType = this.lookupService.ApplicationType?.find(type => type.applicationTypeId == applicationTypeId);
    return applicationType?.applicationTypeName ?? '';
  }

  convertApplicationSourceTypeIdToString(applicationSourceTypeId: number): string {
    let applicationSourceType = this.lookupService.ApplicationSourceType?.find(type => type.applicationSourceTypeId == applicationSourceTypeId);
    return applicationSourceType?.applicationSourceTypeName ?? '';
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';
import {Router} from '@angular/router';
import {ApplicationService} from '../../../Services/Application/application.service';
import {Application} from '../../../Models/Application/application.interface';
import {LookupService} from '../../../Services/lookup.service';
import {ApplicationPreview} from '../../../Models/Application/application-preview.class';
import {ApplicationPreviewService} from '../../../Services/Application/application-preview.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    NgbModule,
    FormsModule
  ],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css'
})
export class ApplicationListComponent implements OnInit {
  @Input() searchId!: string;

  applicationList: Application[] | undefined;
  activeOnly: boolean = false;

  // https://medium.com/@ernestomancebo/native-html-dialog-in-angular-with-dialog-polyfill-2b99f5e2f4ae
  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private lookupService: LookupService,
    private applicationPreviewService: ApplicationPreviewService) { }

  ngOnInit() {
    this.refreshData();
  }

  createNewApplication() {
    this.router.navigate(['/edit-application', {searchId: this.searchId}]);
  }

  convertApplicationTypeIdToString(applicationTypeId: number): string {
    let applicationType = this.lookupService.ApplicationType?.find(type => type.applicationTypeId == applicationTypeId);
    return applicationType?.applicationTypeName ?? '';
  }

  convertApplicationSourceTypeIdToString(applicationSourceTypeId: number): string {
    let applicationSourceType = this.lookupService.ApplicationSourceType?.find(type => type.applicationSourceTypeId == applicationSourceTypeId);
    return applicationSourceType?.applicationSourceTypeName ?? '';
  }

  deleteApplication(applicationId: string | undefined): void {
    if(applicationId) {
      this.applicationService.deleteApplication(applicationId).subscribe(() => {
        this.refreshData();
      });
    }
  }

  previewApplication(applicationId: string | undefined): void {
    if(applicationId !== undefined) {
      this.applicationPreviewService.getApplicationPreview(applicationId).subscribe((preview: ApplicationPreview) => {
        this.applicationPreviewService.applicationPreviewSubject.next([preview, this.searchId]);
      })
    }
  }

  manageApplication(applicationId: string | undefined): void {
    this.router.navigate(['/edit-application', {searchId: this.searchId, applicationId: applicationId}]);
  }

  refreshData(): void {
    this.applicationService.listApplications(this.searchId, this.activeOnly)
      .subscribe(data => {
        this.applicationList = data;
      });
  }
}

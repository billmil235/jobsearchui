import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';
import {Router} from '@angular/router';
import {ApplicationService} from '../../../Services/Searches/application.service';
import {Application} from '../../../Models/Search/application.interface';
import {LookupService} from '../../../Services/lookup.service';
import {ApplicationPreview} from '../../../Models/Application/application-preview.class';

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
  @Input() searchId!: string;

  applicationList: Application[] | undefined;
  applicationPreview: ApplicationPreview | undefined;

  // https://medium.com/@ernestomancebo/native-html-dialog-in-angular-with-dialog-polyfill-2b99f5e2f4ae
  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private lookupService: LookupService) { }

  ngOnInit() {
    this.refreshData();
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

  deleteApplication(applicationId: string | undefined): void {
    if(applicationId) {
      this.applicationService.deleteApplication(applicationId).subscribe(() => {
        this.refreshData();
      });
    }
  }

  previewApplication(applicationId: string | undefined): void {
    if(applicationId !== undefined) {
      this.applicationPreview = new ApplicationPreview();
      this.applicationPreview.applicationId = applicationId;
      this.applicationPreview.companyName = "Test Company";
    }
  }

  private refreshData(): void {
    this.applicationService.listApplications(this.searchId)
      .subscribe(data => {
        this.applicationList = data;
      });
  }
}

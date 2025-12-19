import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationPreview} from '../../../Models/Application/application-preview.class';
import {DatePipe, NgIf} from '@angular/common';
import {ApplicationPreviewService} from '../../../Services/Application/application-preview.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-preview-application',
  standalone: true,
  imports: [
    NgIf,
    DatePipe
  ],
  templateUrl: './preview-application.component.html',
  styleUrl: './preview-application.component.css'
})
export class PreviewApplicationComponent implements OnInit, OnDestroy {

  applicationPreview: ApplicationPreview | undefined;
  searchId: string = '';

  constructor(private applicationPreviewService: ApplicationPreviewService,
              private router: Router) { }

  ngOnInit() {
    this.applicationPreviewService.applicationPreviewSubject.subscribe(data => {
      this.applicationPreview = data[0];
      this.searchId = data[1];
    })
  }

  ngOnDestroy() {
    //this.applicationPreviewService.applicationPreviewSubject.unsubscribe();
  }

  manageApplication(searchId: string, applicationId: string): void {
    this.router.navigate(['/edit-application', {searchId: searchId, applicationId: applicationId}]);
  }
}

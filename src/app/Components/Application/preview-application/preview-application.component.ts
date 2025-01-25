import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ApplicationPreview} from '../../../Models/Application/application-preview.class';
import {NgIf} from '@angular/common';
import {ApplicationPreviewService} from '../../../Services/Application/application-preview.service';

@Component({
  selector: 'app-preview-application',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './preview-application.component.html',
  styleUrl: './preview-application.component.css'
})
export class PreviewApplicationComponent implements OnInit, OnDestroy {

  applicationPreview: ApplicationPreview | undefined;

  constructor(private applicationPreviewService: ApplicationPreviewService) { }

  ngOnInit() {
    this.applicationPreviewService.applicationPreviewSubject.subscribe(data => {
      this.applicationPreview = data;
    })
  }

  ngOnDestroy() {
    this.applicationPreviewService.applicationPreviewSubject.unsubscribe();
  }
}

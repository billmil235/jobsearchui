import {Component, Input, OnInit} from '@angular/core';
import {ApplicationPreview} from '../../../Models/Application/application-preview.class';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-preview-application',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './preview-application.component.html',
  styleUrl: './preview-application.component.css'
})
export class PreviewApplicationComponent {
  @Input() applicationPreview!: ApplicationPreview | undefined;
}

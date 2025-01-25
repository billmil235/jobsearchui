import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ApplicationPreview} from '../../Models/Application/application-preview.class';

@Injectable({
  providedIn: 'root'
})

export class ApplicationPreviewService {
  applicationPreviewSubject: Subject<ApplicationPreview> = new Subject<ApplicationPreview>();
}

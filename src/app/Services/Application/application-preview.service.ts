import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ApplicationPreview} from '../../Models/Application/application-preview.class';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApplicationPreviewService {
  applicationPreviewSubject: Subject<ApplicationPreview> = new Subject<ApplicationPreview>();
  baseUrl = '/api';

  constructor(private httpClient: HttpClient) { }

  getApplicationPreview(applicationId: string): Observable<ApplicationPreview> {
    return this.httpClient.get<ApplicationPreview>(`${this.baseUrl}/Application/Preview/${applicationId}`);
  }
}

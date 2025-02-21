import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Application} from '../../Models/Search/application.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  baseUrl = '/api';

  constructor(private httpClient: HttpClient) { }

  listApplications(searchId: string, activeOnly: boolean): Observable<Application[]> {
    return this.httpClient.get<Application[]>(`${this.baseUrl}/Application/List/${searchId}?activeOnly=${activeOnly}`);
  }

  getApplication(applicationId: string) {
    return this.httpClient.get<Application>(`${this.baseUrl}/Application/${applicationId}`);
  }

  createApplication(application: Application): Observable<Application> {
    return this.httpClient.post<Application>(`${this.baseUrl}/Application`, application);
  }

  deleteApplication(applicationId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/Application/${applicationId}`);
  }
}

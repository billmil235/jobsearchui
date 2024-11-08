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

  listApplications(searchId: string) {
    return this.httpClient.get<Application[]>(`${this.baseUrl}/ListApplications/${searchId}`);
  }

  getApplication(applicationId: string) {
    return this.httpClient.get<Application>(`${this.baseUrl}/${applicationId}`);
  }

  createApplication(application: Application): Observable<Application> {
    return this.httpClient.post<Application>(`${this.baseUrl}/CreateApplication`, application);
  }
}

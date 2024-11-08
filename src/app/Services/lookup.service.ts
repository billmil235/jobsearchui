import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationSourceType} from '../Models/Lookup/application-source-type.interface';
import {ApplicationType} from '../Models/Lookup/application-type.interface';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  baseUrl = '/api';

  public ApplicationSourceType: ApplicationSourceType[] | undefined;
  public ApplicationType: ApplicationType[] | undefined;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<ApplicationSourceType[]>(`${this.baseUrl}/ApplicationSources`).subscribe(data => {
      this.ApplicationSourceType = data;
    });

    this.httpClient.get<ApplicationType[]>(`${this.baseUrl}/ApplicationTypes`).subscribe(data => {
      this.ApplicationType = data;
    });
  }
}

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
    this.httpClient.get<ApplicationSourceType[]>(`${this.baseUrl}/Application/Sources`).subscribe(data => {
      this.ApplicationSourceType = data;
    });

    this.httpClient.get<ApplicationType[]>(`${this.baseUrl}/Application/Types`).subscribe(data => {
      this.ApplicationType = data;
    });
  }
}

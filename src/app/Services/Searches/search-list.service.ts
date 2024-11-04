import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from '../../Models/Search/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchListService {
  baseUrl = 'http://localhost:5228';

  constructor(private httpClient: HttpClient) { }

  getSearchList() {
    return this.httpClient.get<Search[]>(`${this.baseUrl}/Searches`);
  }

  getSearchById(searchId: string) {
    return this.httpClient.get<Search[]>(`${this.baseUrl}/GetSearch/${searchId}`);
  }

  updateSearch(data: Search) {

  }

  addNewSearch(data: Search) {
    // /CreateSearch
  }

  deleteSearch(searchId: string) {

  }
}

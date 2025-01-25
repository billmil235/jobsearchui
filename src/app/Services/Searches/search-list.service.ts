import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from '../../Models/Search/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchListService {
  baseUrl = '/api';

  constructor(private httpClient: HttpClient) { }

  getSearchList() {
    return this.httpClient.get<Search[]>(`${this.baseUrl}/Searches`);
  }

  getSearchById(searchId: string) {
    return this.httpClient.get<Search>(`${this.baseUrl}/Searches?searchId=${searchId}`);
  }

  updateSearch(data: Search) {

  }

  addNewSearch(data: Search) {
    // /CreateSearch
  }

  deleteSearch(searchId: string) {

  }
}

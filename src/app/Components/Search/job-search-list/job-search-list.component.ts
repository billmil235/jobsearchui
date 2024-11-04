import { Component, OnInit } from '@angular/core';
import { SearchListService } from '../../../Services/Searches/search-list.service';
import { Search } from '../../../Models/Search/search.interface';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-job-search-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './job-search-list.component.html',
  styleUrl: './job-search-list.component.css'
})

export class JobSearchListComponent implements OnInit {
  searchList: Search[] = [];

  constructor(private _searchService: SearchListService) {}

  ngOnInit() {
    this._searchService.getSearchList().subscribe(data => {
      this.searchList = data;
    });
  }

}

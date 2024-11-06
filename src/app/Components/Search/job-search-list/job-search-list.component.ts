import { Component, OnInit } from '@angular/core';
import { SearchListService } from '../../../Services/Searches/search-list.service';
import { Search } from '../../../Models/Search/search.interface';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

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

  constructor(private _searchService: SearchListService, private router: Router) {}

  ngOnInit() {
    this._searchService.getSearchList().subscribe(data => {
      this.searchList = data;
    });
  }

  newJobSearch() {
    this.router.navigate(['/createjobsearch']);
  }

  manageSearch(searchId: string) {
    this.router.navigate(['/managesearch', searchId]);
  }

  createNewApplication(searchId: string) {
    this.router.navigate(['/edit-application', searchId]);
  }
}

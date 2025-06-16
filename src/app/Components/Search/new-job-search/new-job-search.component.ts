import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchListService} from '../../../Services/Searches/search-list.service';
import {NewSearch} from '../../../Models/Search/new-search.interface';

@Component({
  selector: 'app-new-job-search',
  standalone: true,
  imports: [],
  templateUrl: './new-job-search.component.html',
  styleUrl: './new-job-search.component.css'
})
export class NewJobSearchComponent {
  searchForm = new FormGroup({
    startDate: new FormControl(),
    searchName: new FormControl()
  });

  constructor(private route: ActivatedRoute,
              private searchService: SearchListService,
              private router: Router) {
  }

  addNewSearch() {
    let search: NewSearch = {
      searchName: this.searchForm.value.searchName,
      startDate: this.searchForm.value.startDate
    }
  }
}

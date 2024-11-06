import {Component, OnInit} from '@angular/core';
import {SearchListService} from '../../../Services/Searches/search-list.service';
import {Search} from '../../../Models/Search/search.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationListComponent} from '../../Application/application-list/application-list.component';
import {ApplicationComponent} from '../../Application/application/application.component';

@Component({
  selector: 'app-search-manager',
  standalone: true,
  imports: [
    ApplicationListComponent,
    ApplicationComponent
  ],
  templateUrl: './search-manager.component.html',
  styleUrl: './search-manager.component.css'
})
export class SearchManagerComponent implements OnInit {
  searchId: string = '';
  search: Search | undefined;

  constructor(private searchList: SearchListService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if(this.route && this.route.queryParams) {
      this.route.params.subscribe((params) => {
        this.searchId = params['searchId'];
      });
    }

    this.searchList.getSearchById(this.searchId).subscribe(data => {
      this.search = data[0];
    })
  }
}

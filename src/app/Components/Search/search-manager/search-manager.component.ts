import {Component, OnInit} from '@angular/core';
import {SearchListService} from '../../../Services/Searches/search-list.service';
import {Search} from '../../../Models/Search/search.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationListComponent} from '../../Application/application-list/application-list.component';
import {ApplicationComponent} from '../../Application/application/application.component';
import {PreviewApplicationComponent} from '../../Application/preview-application/preview-application.component';

@Component({
  selector: 'app-search-manager',
  standalone: true,
  imports: [
    ApplicationListComponent,
    ApplicationComponent,
    PreviewApplicationComponent
  ],
  templateUrl: './search-manager.component.html',
  styleUrl: './search-manager.component.css'
})
export class SearchManagerComponent implements OnInit {
  searchId: string = '';

  constructor(private searchList: SearchListService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if(this.route && this.route.queryParams) {
      this.route.params.subscribe((params) => {
        this.searchId = params['searchId'];
      });
    }
  }
}

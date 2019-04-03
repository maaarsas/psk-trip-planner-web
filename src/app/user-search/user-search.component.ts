import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {UserSearchService} from '../_services/user-search.service';
import {Person} from '../_models/trip';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  results: Person[];
  searchTerm$ = new Subject<string>();

  constructor(private searchService: UserSearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
      });
  }

  ngOnInit() {
  }

}

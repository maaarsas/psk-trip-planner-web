import {Component, OnInit} from '@angular/core';
import {UserSearchService} from '../_services/user-search.service';
import {Person} from '../_models/trip';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {

  results: Person[];

  search = (text$: Observable<string>) => {
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => {
          if (query.trim() !== '' && query.trim().length >= 2) {
            return this.searchService.search(query.trim());
          } else {
            return of([]);
          }
        }
      )
    ).subscribe(response => {
      this.results = response;
    });
  }

  constructor(private searchService: UserSearchService) {
  }

  ngOnInit() {
  }
}

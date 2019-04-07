import {Component, OnInit} from '@angular/core';
import {UserSearchService} from '../_services/user-search.service';
import {Person} from '../_models/trip';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {

  results: Person[];
  queryField: FormControl = new FormControl();

  constructor(private searchService: UserSearchService) {
  }

  ngOnInit() {
    this.queryField.valueChanges.pipe(debounceTime(400),
      distinctUntilChanged(), switchMap((query) => this.searchService.search(query)))
      .subscribe(response => {
          this.results = response;
        }
      );
  }

}

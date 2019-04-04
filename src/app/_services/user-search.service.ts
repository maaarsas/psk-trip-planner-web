import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Person} from '../_models/trip';


@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private httpClient: HttpClient) {
  }

  search(terms: Observable<string>) {
    return terms.pipe(debounceTime(400), distinctUntilChanged(),
      switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term: string): Observable<Person[]> {
    if (term !== '') {
      return this.httpClient.get<Person[]>(environment.apiUrl + '/user/search', {
        params: new HttpParams()
          .set('query', term)
      });
    }
  }
}

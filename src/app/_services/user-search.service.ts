import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Person} from '../_models/trip';


@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private httpClient: HttpClient) {
  }

  search(term: string): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${environment.apiUrl}/user/search`, {
      params: new HttpParams()
        .set('query', term)
    });
  }
}

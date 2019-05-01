import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Office} from '../_models/trip';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private httpClient: HttpClient) {
  }

  search(term: string): Observable<Office[]> {
    return this.httpClient.get<Office[]>(`${environment.apiUrl}/office`, {
      params: new HttpParams()
        .set('query', term)
    });
  }
}

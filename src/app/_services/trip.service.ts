import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Trip, TripParams, TripResponse} from '../_models/trip';
import {MY_TRIPS} from '../_mocks/my-trips';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {
  }

  getMyTrips(params: TripParams): Observable<TripResponse> {
    //return of({totalResultsCount: 100, results: MY_TRIPS});

    return this.http.get<TripResponse>(`${environment.apiUrl}/trip/my`, {
      params: new HttpParams()
        .set('page', params.page.toString())
        .set('resultsPerPage', params.pageSize.toString())
    });
  }

  getMyInvitations(params: TripParams): Observable<TripResponse> {
    return of({totalResultsCount: 100, results: MY_TRIPS});
    // TODO actual backend call
    // return this.http.get(API_URL, {
    //   params: new HttpParams()
    //     .set('page', params.page.toString())
    //     .set('pageSize', params.pageSize.toString())
    // }
  }

  acceptInvitation(inviteToAccept: Trip) {
    // TODO
  }

  declineInvitation(inviteToDecline: Trip) {
    // TODO
  }

}

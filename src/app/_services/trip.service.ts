import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Trip, TripParams, TripResponse} from '../_models/trip';
import {MY_TRIPS} from '../_mocks/my-trips';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {
  }

  getMyTrips(params: TripParams): Observable<TripResponse> {
    return of({totalResultsCount: 100, results: MY_TRIPS});
    // TODO actual backend call
    // return this.http.get(API_URL, {
    //   params: new HttpParams()
    //     .set('page', params.page.toString())
    //     .set('pageSize', params.pageSize.toString())
    // }
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

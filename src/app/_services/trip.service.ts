import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trip, TripParams, TripResponse} from '../_models/trip';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {
  }

  getMyTrips(params: TripParams): Observable<TripResponse> {

    return this.http.get<TripResponse>(`${environment.apiUrl}/trip/my`, {
      params: new HttpParams()
        .set('page', params.page.toString())
        .set('resultsPerPage', params.pageSize.toString())
    });
  }

  getMyInvitations(params: TripParams): Observable<TripResponse> {
    return this.http.get<TripResponse>(`${environment.apiUrl}/trip/invitation`, {
      params: new HttpParams()
        .set('page', params.page.toString())
        .set('pageSize', params.pageSize.toString())
    });
  }

  acceptInvitation(inviteToAccept: Trip) {
    // TODO
  }

  declineInvitation(inviteToDecline: Trip) {
    // TODO
  }

}

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

    let httpParams = new HttpParams()
      .set('page', params.page.toString())
      .set('pageSize', params.pageSize.toString());

    if(params.startDateFrom != null) httpParams = httpParams.set('startDateFrom', params.startDateFrom);
    if(params.startDateTo != null) httpParams = httpParams.set('startDateTo', params.startDateTo);
    if(params.endDateFrom != null) httpParams = httpParams.set('endDateFrom', params.endDateFrom);
    if(params.endDateTo != null) httpParams = httpParams.set('endDateTo', params.endDateTo);

    return this.http.get<TripResponse>(`${environment.apiUrl}/trip/my`, {
      params: httpParams
    });
  }

  getMyInvitations(params: TripParams): Observable<TripResponse> {

    return this.http.get<TripResponse>(`${environment.apiUrl}/trip/invitation`, {
      params: new HttpParams()
        .set('page', params.page.toString())
        .set('resultsPerPage', params.pageSize.toString())
    });
  }

  acceptInvitation(inviteToAccept: Trip) {
    // TODO
  }

  declineInvitation(inviteToDecline: Trip) {
    // TODO
  }

}

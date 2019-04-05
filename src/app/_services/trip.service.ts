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
      params: this.createHttpParams(params)
    });
  }

  getMyInvitations(params: TripParams): Observable<TripResponse> {

    return this.http.get<TripResponse>(`${environment.apiUrl}/trip/invitation`, {
      params: this.createHttpParams(params)
    });
  }

  getMyOrganizedTrips(params: TripParams): Observable<TripResponse>{
    return this.http.get<TripResponse>(`${environment.apiUrl}/trip`, {
      params: this.createHttpParams(params)
    });
  }

  getAllTrips(params: TripParams): Observable<TripResponse> {
    return this.http.get<TripResponse>(`${environment.apiUrl}/trip/organized`, {
      params: this.createHttpParams(params)
    });
  }

  acceptInvitation(inviteToAccept: Trip) {
    // TODO
  }

  declineInvitation(inviteToDecline: Trip) {
    // TODO
  }

  createHttpParams(params: TripParams): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(param => {
      if (params[param]!=null) {
        httpParams = httpParams.set(param, params[param].toString());
      }
    });
    return httpParams;
  }

}

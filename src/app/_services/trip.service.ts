import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Trip, TripParams, TripParticipation, TripResponse } from '../_models/trip';
import {environment} from '../../environments/environment';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient, private userService: UserService) {
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

  getMyOrganizedTrips(params: TripParams): Observable<TripResponse> {
    return this.http.get<TripResponse>(`${environment.apiUrl}/trip/organized`, {
      params: this.createHttpParams(params)
    });
  }

  getAllTrips(params: TripParams): Observable<TripResponse> {
    return this.http.get<TripResponse>(`${environment.apiUrl}/trip`, {
      params: this.createHttpParams(params)
    });
  }

  acceptInvitation(inviteToAccept: Trip) {
    const id = this.getCurrentUserTripParticipationIdFromTrip(inviteToAccept);
    return this.http.post(`${environment.apiUrl}/tripParticipation/${id}/accept`, null);
  }

  declineInvitation(inviteToDecline: Trip) {
    const id = this.getCurrentUserTripParticipationIdFromTrip(inviteToDecline);
    return this.http.post(`${environment.apiUrl}/tripParticipation/${id}/reject`, null);
  }

  private getCurrentUserTripParticipationIdFromTrip(trip: Trip): number {
    for (const tripParticipation of trip.tripParticipations) {
      if (tripParticipation.participant.id === this.userService.getCurrentUser().id) {
        return tripParticipation.id;
      }
    }
    return null;
  }

  private createHttpParams(params: TripParams): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(param => {
      if (params[param] != null) {
        httpParams = httpParams.set(param, params[param].toString());
      }
    });
    return httpParams;
  }

}

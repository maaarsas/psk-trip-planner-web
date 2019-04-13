import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Office} from '../_models/office';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) { }

  getOffices(): Observable<Office[]> {
    return this.http.get<Office[]>(`${environment.apiUrl}/office`);
  }

  deleteOffice(office: Office): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/office/${office.id}`);
  }

  addOrUpdateOffice(office: Office): Observable<any> {
    return this.http.post(`${environment.apiUrl}/office`, office);
  }
}

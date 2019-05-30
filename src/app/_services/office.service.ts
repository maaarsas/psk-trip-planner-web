import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Office} from '../_models/office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) {
  }

  getOffices(): Observable<Office[]> {
    return this.http.get<Office[]>(`${environment.apiUrl}/office`);
  }

  deleteOffice(office: Office): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/office/${office.id}`);
  }

  addOffice(office: Office): Observable<any> {
    return this.http.post(`${environment.apiUrl}/office`, office);
  }

  updateOffice(office: Office): Observable<any> {
    return this.http.put(`${environment.apiUrl}/office`, office);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/user`);
  }

  deleteUser(user: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/user/${user.id}`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user`, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/user/${user.id}/roles`, user);
  }
}

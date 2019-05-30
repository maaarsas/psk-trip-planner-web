import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User;

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): User {
    if (this.currentUser == null) {
      this.updateCurrentUser();
    }
    return this.currentUser;
  }

  getCurrentUserActually(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user/me`);
  }

  updateCurrentUser() {
    this.http.get<User>(`${environment.apiUrl}/user/me`).subscribe(
      user => this.currentUser = user,
      error => this.currentUser = null,
    );
  }
}

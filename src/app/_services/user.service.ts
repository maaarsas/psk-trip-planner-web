import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User;

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  updateCurrentUser() {
    this.http.get<User>(`${environment.apiUrl}/user/me`).subscribe(
      user => this.currentUser = user,
      error => this.currentUser = null;
    );
  }
}

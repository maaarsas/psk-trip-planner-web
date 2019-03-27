import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  localStorageItemName = 'currentUser';
  currentUser: User;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(this.localStorageItemName, JSON.stringify(user));
          this.currentUser = new User();
          this.currentUser.email = username;
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.localStorageItemName);
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem(this.localStorageItemName));
  }

  getCurrentUserEmail(): string {
    return this.currentUser.email;
  }
}

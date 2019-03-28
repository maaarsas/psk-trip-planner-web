import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  localStorageItemName = 'currentUser';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { username: email, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(this.localStorageItemName, JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.localStorageItemName);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.localStorageItemName);
  }

  getCurrentUserEmail(): string {
    const currentUser = JSON.parse(localStorage.getItem(this.localStorageItemName));
    if (currentUser && currentUser.username) {
      return currentUser.username;
    }
    return '';
  }
}

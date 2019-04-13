import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  localStorageItemName = 'currentUser';


  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    window.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage && !localStorage.getItem('currentUser')) {
          this.router.navigate(['/login']);
      }
    }, false);
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(this.localStorageItemName, JSON.stringify(user));
          this.userService.updateCurrentUser();
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.localStorageItemName);
    this.userService.updateCurrentUser();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.localStorageItemName);
  }

  getCurrentUserEmail(): string {
    const currentUser = JSON.parse(localStorage.getItem(this.localStorageItemName));
    if (currentUser && currentUser.email) {
      return currentUser.email;
    }
    return '';
  }
}

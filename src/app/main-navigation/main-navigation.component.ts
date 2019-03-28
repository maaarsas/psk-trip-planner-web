import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent {

  primaryNavigationLinks = [
    { route: 'trips', name: 'Trips'},
    { route: 'planning', name: 'Planning'},
    { route: 'admin', name: 'Administration'},
    { route: 'statistics', name: 'Statistics'},
  ];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}

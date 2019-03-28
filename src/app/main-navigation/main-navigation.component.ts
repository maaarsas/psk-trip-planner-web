import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent {

  readonly primaryNavigationLinks = [
    { route: 'trips', name: 'Trips'},
    { route: 'planning', name: 'Planning'},
    { route: 'admin', name: 'Administration'},
    { route: 'statistics', name: 'Statistics'},
  ];

  readonly secondaryNavigationLinks = [
    { route: 'trips', secondaryLinks: [
        { route: 'trips/my-trips', name: 'My trips' },
        { route: 'trips/invitations', name: 'Invitations' },
      ]},
    { route: 'planning', secondaryLinks: [
        { route: 'planning/create', name: 'Create trip' },
        { route: 'planning/my-organized', name: 'My organized trips' },
        { route: 'planning/all', name: 'All trips' },
      ]},
    { route: 'admin', secondaryLinks: [
        { route: 'admin/users', name: 'All users' },
        { route: 'admin/offices', name: 'All offices' },
      ]},
    { route: 'statistics', secondaryLinks: [
      ]},
  ];

  currentSecondaryNavigationLinks = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.currentSecondaryNavigationLinks = this.getSecondaryNavigationLinks();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getSecondaryNavigationLinks(): object[] {
    let links = [];
    this.secondaryNavigationLinks.forEach(obj => {
      if (this.router.isActive(obj.route, false)) {
        links = obj.secondaryLinks;
        return;
      }
    });
    return links;
  }

}

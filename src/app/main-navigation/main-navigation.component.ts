import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../_services/language.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent {

  isNavbarCollapsed = true;

  readonly primaryNavigationLinks = [
    { route: 'trips', name: 'navigation.primary.trips'},
    { route: 'planning', name: 'navigation.primary.planning'},
    { route: 'admin', name: 'navigation.primary.administration'},
    { route: 'statistics', name: 'navigation.primary.statistics'},
  ];

  readonly secondaryNavigationLinks = [
    { route: 'trips', secondaryLinks: [
        { route: 'trips/my-trips', name: 'navigation.secondary.my-trips' },
        { route: 'trips/invitations', name: 'navigation.secondary.invitations' },
      ]},
    { route: 'planning', secondaryLinks: [
        { route: 'planning/create', name: 'navigation.secondary.create-trip' },
        { route: 'planning/my-organized', name: 'navigation.secondary.my-organized-trips' },
        { route: 'planning/all', name: 'navigation.secondary.all-trips' },
      ]},
    { route: 'admin', secondaryLinks: [
        { route: 'admin/users', name: 'navigation.secondary.all-users' },
        { route: 'admin/offices', name: 'navigation.secondary.all-offices' },
      ]},
    { route: 'statistics', secondaryLinks: [
      ]},
  ];

  currentSecondaryNavigationLinks = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private languageService: LanguageService
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

  changeLanguage(newLanguage: string): void {
    this.languageService.setLanguage(newLanguage);
  }

}

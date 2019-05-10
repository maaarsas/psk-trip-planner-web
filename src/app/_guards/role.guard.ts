import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserService } from '../_services/user.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivateChild {

    constructor(private router: Router, private userService: UserService) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      // only block access when there are allowed roles specified for the route and current user doesn't have any of them
      // when allowed roles are not specified, the route is allowed for all roles
      const allowedRoles = route.data['roles'] as Array<string>;
      if (allowedRoles == null) {
        return true;
      }
      const matchingAllowedRoles = this.userService.getCurrentUser().roles.filter(
        element => allowedRoles.includes(element)
      );
      if (matchingAllowedRoles.length === 0) {
        return false;
      }
      return true;
    }
}

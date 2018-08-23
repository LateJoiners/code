import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean {
    const user = this.authService.getUser();
    if (user) {
      return true;
    }

    this.router.navigate(
      ['/login'],
      { queryParams: { returnUrl: route.url.join('/') }}
    );
    return false;
  }
}

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Auth } from "../auth";
import { AuthModalService } from 'src/app/auth/auth-modal.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private auth: Auth,
    private router: Router,
    private authModal: AuthModalService
  ) {}

  async canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {

    if (this.auth.isLoggedIn()) {
      return true;
    }

    try {
      // Open modal and wait for user to login/register
      await this.authModal.openLogin();
      // If login succeeded, allow navigation
      if (this.auth.isLoggedIn()) return true;
      // Otherwise, redirect to home
      return this.router.parseUrl('/');
    } catch (err) {
      // User cancelled or modal dismissed — redirect to home (or stay)
      return this.router.parseUrl('/');
    }
  }
}

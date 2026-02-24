import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loggedIn$ = new BehaviorSubject<boolean>(false as boolean);
  authStatus$ = this.loggedIn$.asObservable();
  constructor(private router: Router, private tokenService: TokenService) {
    // initialize loggedIn state from TokenService
    this.loggedIn$.next(this.tokenService.isValid());
  }

  private hasValidToken(): boolean {
    return this.tokenService.isValid();
  }

  loginSuccess(token: string) {
    this.tokenService.setToken(token);
    this.loggedIn$.next(true);
  }

  logout() {
    this.tokenService.clear();
    this.loggedIn$.next(false);
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return this.hasValidToken();
  }
}

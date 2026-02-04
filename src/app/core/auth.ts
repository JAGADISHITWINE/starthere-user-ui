import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loggedIn$ = new BehaviorSubject<boolean>(this.hasValidToken());
  authStatus$ = this.loggedIn$.asObservable();

  constructor(private router: Router) {}

  private hasValidToken(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) return false;

    try {
      const decoded: any = jwtDecode(token);
      return decoded.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  loginSuccess(token: string) {
    sessionStorage.setItem('token', token);
    this.loggedIn$.next(true);
  }

  logout() {
    sessionStorage.clear();
    this.loggedIn$.next(false);
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return this.hasValidToken();
  }
}

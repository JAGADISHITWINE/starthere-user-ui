import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

interface JwtPayload {
  exp?: number;
  name?: string;
  email?: string;
  [key: string]: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly tokenStorageKey = 'token';
  private readonly loggedIn$ = new BehaviorSubject<boolean>(this.hasValidToken());
  readonly authStatus$ = this.loggedIn$.asObservable();

  constructor(private router: Router) {}

  private decodeToken(token: string): JwtPayload | null {
    try {
      return jwtDecode<JwtPayload>(token);
    } catch {
      return null;
    }
  }

  private isPayloadValid(decoded: JwtPayload | null): decoded is JwtPayload & { exp: number } {
    return Boolean(decoded?.exp && decoded.exp * 1000 > Date.now());
  }

  private hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    return this.isPayloadValid(this.decodeToken(token));
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenStorageKey);
  }

  getDecodedTokenPayload(): JwtPayload | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    return this.decodeTokenPayload(token);
  }

  decodeTokenPayload(token: string): JwtPayload | null {
    const decoded = this.decodeToken(token);
    return this.isPayloadValid(decoded) ? decoded : null;
  }

  loginSuccess(token: string): void {
    sessionStorage.setItem(this.tokenStorageKey, token);
    this.loggedIn$.next(true);
  }

  logout(): void {
    sessionStorage.removeItem(this.tokenStorageKey);
    this.loggedIn$.next(false);
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return this.hasValidToken();
  }
}

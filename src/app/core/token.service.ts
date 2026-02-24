import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string | null {
    try {
      return sessionStorage.getItem('token');
    } catch {
      return null;
    }
  }

  setToken(token: string) {
    try {
      sessionStorage.setItem('token', token);
    } catch (e) {
      console.error('Failed to set token', e);
    }
  }

  clear() {
    try {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('userData');
    } catch (e) {
      console.error('Failed to clear token', e);
    }
  }

  decode(): any | null {
    const token = this.getToken();
    if (!token) return null;
    try {
  // Use the named export `jwtDecode` from the library (v4+).
  return jwtDecode(token as string);
    } catch (e) {
      console.error('Failed to decode token', e);
      return null;
    }
  }

  getUserId(): number | null {
    const decoded = this.decode();
    if (!decoded) return null;
    return Number(decoded?.id ?? decoded?.userId ?? null) || null;
  }

  isValid(): boolean {
    const decoded = this.decode();
    if (!decoded) return false;
    if (!decoded.exp) return true;
    return decoded.exp * 1000 > Date.now();
  }
}

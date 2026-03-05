import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicRouteIdService {
  private readonly prefix = 'trk:';
  private readonly opaqueRefPattern = /^[A-Za-z0-9_-]{40,}$/;

  private isOpaqueRef(value: string): boolean {
    return this.opaqueRefPattern.test(value) && !value.startsWith(this.prefix);
  }

  encode(rawValue: string | number | null | undefined): string {
    const value = String(rawValue ?? '').trim();
    if (!value) return '';
    if (this.isOpaqueRef(value)) return value;

    const payload = `${this.prefix}${value}`;
    return btoa(payload)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');
  }

  decode(publicRef: string | null | undefined): string | null {
    const token = String(publicRef ?? '').trim();
    if (!token) return null;

    try {
      const normalized = token.replace(/-/g, '+').replace(/_/g, '/');
      const padding = '='.repeat((4 - (normalized.length % 4)) % 4);
      const decoded = atob(`${normalized}${padding}`);

      if (!decoded.startsWith(this.prefix)) return null;
      const value = decoded.slice(this.prefix.length).trim();
      return value || null;
    } catch {
      return null;
    }
  }

  resolve(publicOrRaw: string | null | undefined): string {
    const raw = String(publicOrRaw ?? '').trim();
    if (!raw) return '';
    if (this.isOpaqueRef(raw)) return raw;
    return this.decode(raw) ?? raw;
  }
}

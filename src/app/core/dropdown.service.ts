import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EncryptionService } from './encryption.service';

export interface DropdownOption {
  value: string;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private readonly API = environment.baseUrl;

  constructor(private http: HttpClient, private crypto: EncryptionService) {}

  getOptions(type: string, fallback: DropdownOption[] = []): Observable<DropdownOption[]> {
    return this.http.get(`${this.API}/meta/dropdowns/${type}`).pipe(
      map((res: any) => this.extractOptions(res, type, fallback)),
      catchError(() => of(fallback))
    );
  }

  private extractOptions(res: any, type: string, fallback: DropdownOption[]): DropdownOption[] {
    const decrypted = this.tryDecrypt(res?.data);
    const payload = decrypted ?? res?.data ?? res ?? {};

    const candidates = [
      payload?.options,
      payload?.[type],
      payload?.data?.options,
      payload?.data?.[type],
      payload?.items,
      payload,
    ];

    const rawOptions = candidates.find((value) => Array.isArray(value));
    if (!Array.isArray(rawOptions)) return fallback;

    const mapped = rawOptions
      .map((item: any) => this.mapOption(item))
      .filter((item): item is DropdownOption => !!item);

    return mapped.length ? mapped : fallback;
  }

  private tryDecrypt(data: any): any {
    if (!data) return null;

    try {
      return typeof data === 'string' ? this.crypto.decrypt(data) : data;
    } catch {
      return null;
    }
  }

  private mapOption(item: any): DropdownOption | null {
    if (typeof item === 'string') {
      const trimmed = item.trim();
      return trimmed ? { value: trimmed, label: trimmed } : null;
    }

    if (!item || typeof item !== 'object') return null;

    const rawValue = item.value ?? item.id ?? item.key ?? item.slug ?? item.name;
    const rawLabel = item.label ?? item.name ?? item.title ?? item.value;

    if (rawValue === undefined || rawLabel === undefined) return null;

    return {
      value: String(rawValue),
      label: String(rawLabel),
    };
  }
}

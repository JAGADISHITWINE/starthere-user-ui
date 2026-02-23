import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EncryptionService } from 'src/app/core/encryption.service';
import { environment } from 'src/environments/environment';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  response: boolean;
  token?: string;
  [key: string]: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class Login {
  private readonly api = environment.baseUrl;

  constructor(private http: HttpClient, private crypto: EncryptionService) {}

  login(data: LoginPayload): Observable<LoginResponse> {
    const payload: LoginPayload = {
      email: data.email,
      password: data.password,
    };

    const encryptedPayload = this.crypto.encrypt(payload);

    return this.http
      .post<{ data?: string }>(`${this.api}/login`, { encryptedPayload })
      .pipe(
        map((res) => {
          const decrypted = this.crypto.decrypt<LoginResponse>(res?.data ?? '');

          if (decrypted?.token) {
            return decrypted;
          }

          throw new Error('Invalid response format');
        }),
      );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return Boolean(this.getToken());
  }
}

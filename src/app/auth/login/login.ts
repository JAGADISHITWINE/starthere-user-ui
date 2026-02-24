import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';
import { EncryptionService } from 'src/app/core/encryption.service';
import { TokenService } from 'src/app/core/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Login {
  constructor(private http: HttpClient, private crypto: EncryptionService, private tokenService: TokenService) { }
  private API = environment.baseUrl

  login(data: any) {
    const payload = {
      email: data.email,
      password: data.password
    };

    const encryptedPayload = this.crypto.encrypt(payload);

    return this.http.post<any>(`${this.API}/login`, { encryptedPayload })
      .pipe(
        map((res: any) => {
          try {
            const decrypted = this.crypto.decrypt(res.data);
            if (decrypted && decrypted.token) {
              this.tokenService.setToken(decrypted.token);

              return decrypted;
            } else {
              throw new Error('Invalid response format');
            }
          } catch (error) {
            console.error('Decryption error:', error);
            throw error;
          }
        })
      );
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { EncryptionService } from 'src/app/core/encryption.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Register {
  constructor(private http: HttpClient, private crypto: EncryptionService) { }
  private API = environment.baseUrl

  register(data: any) {
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password
    }
    const encryptedPayload = this.crypto.encrypt(payload);

    return this.http.post<any>(`${this.API}/register`, { encryptedPayload })
      .pipe(
        map((res: any) => {
          try {
            // Decrypt the response
            const decrypted = res;

            if (decrypted && decrypted.token) {
              // Store the JWT token (not the decrypted object)
              sessionStorage.setItem('token', decrypted.token);

              return decrypted;
            } else {
              throw new Error('Invalid response format');
            }
          } catch (error) {
            console.error('Decryption error:', error);
            throw error;
          }
        }),

      );
  }

}

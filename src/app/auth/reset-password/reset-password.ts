import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncryptionService } from 'src/app/core/encryption.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResetPassword {

  constructor(private http: HttpClient, private crypto: EncryptionService) { }
  private API = environment.baseUrl

  // Submit new password with token from URL
  resetPassword(data: { token: string; password: string }): Observable<any> {
    return this.http.post(`${this.API}/reset-password`, data);
  }

  // Optional: validate token when reset-password page loads
  validateResetToken(token: string): Observable<any> {
    return this.http.post(`${this.API}/validate-reset-token`, { token });
  }
}

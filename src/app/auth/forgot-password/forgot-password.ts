import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncryptionService } from 'src/app/core/encryption.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForgotPassword {

  constructor(private http: HttpClient, private crypto: EncryptionService) { }
  private API = environment.baseUrl

// Send reset link to email
forgotPassword(email: string): Observable<any> {
  return this.http.post(`${this.API}/forgot-password`, { email });
}

}

import { Injectable } from '@angular/core';
import { EncryptionService } from '../core/encryption.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CancleBookings {
  

  private API = `${environment.baseUrl}`;

  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  cancelBooking(bookingId:any, other:any) {
    return this.http.post(`${this.API}/bookings/${bookingId}/cancel`, other).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    );
  }
}

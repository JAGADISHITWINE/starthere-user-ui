import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../core/encryption.service';

@Injectable({
  providedIn: 'root',
})
export class MyBookings {


  private API = `${environment.baseUrl}`;

  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  getMyBookings(UserId:any) {
    return this.http.get(`${this.API}/getMyBookingsById/${UserId}`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    );
  }

downloadReceipt(bookingId: any, userId: any) {
  return this.http.get(
    `${this.API}/bookings/${userId}/${bookingId}/receipt`,
    { 
      responseType: 'blob',
      observe: 'response'
    }
  );
}

viewBookingDetails(bookingId:any){
  return this.http.get(
    `${this.API}/bookings/${bookingId}/receipt`,
    { 
      responseType: 'blob',
      observe: 'response'
    }
  );
}
}

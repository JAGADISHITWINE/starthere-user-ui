import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../core/encryption.service';

export interface Participant {
  name: string;
  age: number | null;
  gender: string;
  idType: string;
  idNumber: string;
  phone: string;
  medicalInfo: string;
}

export interface BookingData {
  userId: any;
  trekId: any;
  trekName: string;
  batchId: any;
  startDate: string;
  endDate: string;
  price: any;
  availableSlots: any;
  participants: any;
  selectedAddOns: any[];
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    emergencyContact: string;
    specialRequests: string;
  };
  participantDetails?: Participant[]; // NEW: Add this field
}

@Injectable({
  providedIn: 'root',
})
export class Booking {
  private bookingDataSubject = new BehaviorSubject<BookingData | null>(null);
  public bookingData$ = this.bookingDataSubject.asObservable();

  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  private API = `${environment.baseUrl}`;

  // Set booking data
  setBookingData(data: BookingData) {
    const encryptedPayload = this.crypto.encrypt(data);


    return this.http.post<any>(`${this.API}/booking`, { encryptedPayload })
      .pipe(
        map((res: any) => {
          try {
            // Decrypt the response
            const decrypted = this.crypto.decrypt(res.data);
            return {
              ...res,
              data: decrypted
            }
          }
          catch (error) {
            console.error('Decryption error:', error);
            throw error;
          }
        }),

      );
  }

  // Get current booking data
  getBookingData(): BookingData | null {
    return this.bookingDataSubject.value;
  }

  // Clear booking data
  clearBookingData() {
    this.bookingDataSubject.next(null);
  }

  // Calculate total price
  calculateTotal(basePrice: number, participants: number, addOns: any[]): number {
    const baseTotal = basePrice * participants;
    const addOnsTotal = addOns
      .filter(addon => addon.selected)
      .reduce((sum, addon) => sum + addon.price, 0);
    return baseTotal + addOnsTotal;
  }
}

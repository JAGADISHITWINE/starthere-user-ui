// services/trek.service.ts - UPDATED with getAvailableYears

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EncryptionService } from '../core/encryption.service';


export interface Trek {
  id: number;
  name: string;
  location: string;
  difficulty: string;
  category: string;
  description: string;
  cover_image: string;
  gallery_images: string[];
  highlights: string[];
  min_price?: number;
  max_price?: number;
  total_batches?: number;
  active_batches?: number;
  batches?: TrekBatch[];
}

export interface TrekBatch {
  id: number;
  trek_id: number;
  start_date: string;
  end_date: string;
  price: number;
  available_slots: number;
  booked_slots: number;
  remaining_slots: number;
  duration: string;
  status: 'active' | 'inactive' | 'full' | 'completed' | 'cancelled';
  batch_status: 'available' | 'selling-fast' | 'last-seat' | 'sold-out';
  min_age?: number;
  max_age?: number;
  min_participants?: number;
  max_participants?: number;
  inclusions?: string[];
  exclusions?: string[];
  itinerary_days?: any[];
}

export interface TrekListItem {
  id: number;
  name: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  image: string;
  status: 'available' | 'selling-fast' | 'last-seat' | 'sold-out';
  category: string;
  batch_id: number;
  start_date: string;
  end_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class Upcomingtours {
  private apiUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  /**
   * Get all treks with filters
   */
  getTreks(filters?: {
    year?: number;
    month?: number;
    category?: string;
    sort?: string;
    status?: string;
  }): Observable<any> {
    let params = new HttpParams();

    if (filters) {
      if (filters.year) params = params.set('year', filters.year.toString());
      if (filters.month) params = params.set('month', filters.month.toString());
      if (filters.category) params = params.set('category', filters.category);
      if (filters.sort) params = params.set('sort', filters.sort);
      if (filters.status) params = params.set('status', filters.status);
    }

    return this.http.get(this.apiUrl, { params });
  }

  getTrekById(id: number): Observable<any> {
    if (!id || id <= 0) {
      return throwError(() => new Error('Invalid trek ID'));
    }

    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map((res: any) => {
        try {
          if (res && res.data) {
            const decrypted = this.crypto.decrypt(res.data);

            // Backend now returns { success: true, trek: {...} }
            if (decrypted?.success && decrypted.trek) {
              return {
                success: true,
                data: decrypted.trek
              };
            }

            return decrypted;
          }
          return res;
        } catch (error) {
          console.error('Decryption error in getTrekById:', error);
          throw new Error('Failed to decrypt trek details');
        }
      }),
      catchError(error => {
        console.error(`Get trek by ID ${id} error:`, error);
        return throwError(() => error);
      })
    );
  }

  getTreksByMonth(year: number, month: number): Observable<TrekListItem[]> {
    if (!year || !month || month < 1 || month > 12) {
      return throwError(() => new Error('Invalid year or month'));
    }

    return this.http.get<any>(
      `${this.apiUrl}/by-month/${year}/${month}`
    ).pipe(
      map(response => {
        try {
          if (!response || !response.data) {
            return [];
          }

          const decrypted = this.crypto.decrypt(response.data);

          if (decrypted?.success && Array.isArray(decrypted.treks)) {
            return decrypted.treks.map((trek: any) =>
              this.formatTrekForList(trek)
            );
          }

          return [];
        } catch (error) {
          console.error('Decryption error in getTreksByMonth:', error);
          return [];
        }
      }),
      catchError(error => {
        console.error(`Get treks by month ${year}/${month} error:`, error);
        return throwError(() => error);
      })
    );
  }

  getAllTreksFormatted(year?: number): Observable<TrekListItem[]> {
    let params = new HttpParams().set('status', 'active');

    if (year) {
      params = params.set('year', year.toString());
    }

    return this.http.get<any>(
      this.apiUrl,
      { params }
    ).pipe(
      map((response: any) => {
        const decrypted = this.crypto.decrypt(response.data);
        if (!decrypted?.success || !decrypted.treks) return [];

        const formatted: TrekListItem[] = [];

        decrypted.treks.forEach((trek: any) => {
          if (trek.batches?.length) {
            trek.batches.forEach((batch: any) => {
              formatted.push(this.formatTrekWithBatch(trek, batch));
            });
          }
        });

        return formatted;
      })
    );
  }

  getAvailableYears(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/meta/available-years`).pipe(
      map((res: any) => {
        try {
          if (res && res.data) {
            const decrypted = this.crypto.decrypt(res.data);
            return {
              success: decrypted?.success || false,
              years: decrypted?.years || [],
              count: decrypted?.count || 0
            };
          }
          return { success: false, years: [], count: 0 };
        } catch (error) {
          console.error('Decryption error in getAvailableYears:', error);
          throw new Error('Failed to decrypt available years');
        }
      }),
      catchError(error => {
        console.error('Get available years error:', error);
        return throwError(() => error);
      })
    );
  }

  getMonthlyStats(year: number): Observable<any> {
    if (!year || year < 2000 || year > 2100) {
      return throwError(() => new Error('Invalid year'));
    }

    return this.http.get<any>(`${this.apiUrl}/stats/monthly/${year}`).pipe(
      map((res: any) => {
        try {
          if (res && res.data) {
            const decrypted = this.crypto.decrypt(res.data);
            return {
              success: decrypted?.success || false,
              year: decrypted?.year || year,
              months: decrypted?.months || []
            };
          }
          return { success: false, year, months: [] };
        } catch (error) {
          console.error('Decryption error in getMonthlyStats:', error);
          throw new Error('Failed to decrypt monthly stats');
        }
      }),
      catchError(error => {
        console.error(`Get monthly stats for ${year} error:`, error);
        return throwError(() => error);
      })
    );
  }
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/meta/categories`).pipe(
      map((res: any) => {
        try {
          if (res && res.data) {
            const decrypted = this.crypto.decrypt(res.data);
            return {
              success: decrypted?.success || false,
              categories: decrypted?.categories || [],
              count: decrypted?.count || 0
            };
          }
          return { success: false, categories: [], count: 0 };
        } catch (error) {
          console.error('Decryption error in getCategories:', error);
          throw new Error('Failed to decrypt categories');
        }
      }),
      catchError(error => {
        console.error('Get categories error:', error);
        return throwError(() => error);
      })
    );
  }

  private formatTrekForList(trek: any): TrekListItem {
    const startDate = new Date(trek.start_date);

    return {
      id: trek.id,
      name: trek.name,
      location: trek.location,
      date: this.formatDate(startDate),
      time: this.extractTime(trek.start_date),
      duration: trek.duration || this.calculateDuration(trek.start_date, trek.end_date),
      price: parseFloat(trek.price),
      image: trek.cover_image || 'assets/default-trek.jpg',
      status: trek.batch_status,
      category: trek.category,
      batch_id: trek.batch_id,
      start_date: trek.start_date,
      end_date: trek.end_date
    };
  }

  /**
   * Format trek with batch info
   */
  private formatTrekWithBatch(trek: any, batch: any): TrekListItem {
    const startDate = new Date(batch.start_date);

    return {
      id: trek.id,
      name: trek.name,
      location: trek.location,
      date: this.formatDate(startDate),
      time: this.extractTime(batch.start_date),
      duration: batch.duration || this.calculateDuration(batch.start_date, batch.end_date),
      price: parseFloat(batch.price),
      image: trek.cover_image || 'assets/default-trek.jpg',
      status: batch.batch_status,
      category: trek.category,
      batch_id: batch.id,
      start_date: batch.start_date,
      end_date: batch.end_date
    };
  }

  /**
   * Format date as "DD MMM"
   */
  private formatDate(date: Date): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  }

  /**
   * Extract time from datetime string
   */
  private extractTime(dateTimeString: string): string {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${period}`;
  }

  /**
   * Calculate duration between two dates
   */
  private calculateDuration(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return '1 Day';
    } else if (diffDays < 1) {
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
      return `${diffHours} Hours`;
    } else {
      return `${diffDays} Days`;
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  getTreksTours(params: any): Observable<any> {
    // Replace with your actual API endpoint
    return this.http.get('/api/treks-tours', { params });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EncryptionService } from '../core/encryption.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient, private crypto: EncryptionService) { }

  private API = environment.baseUrl;

  getTreksTours(): Observable<any> {
    return this.http.get(`${this.API}/getAllTreks`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      })
    )
  }
}

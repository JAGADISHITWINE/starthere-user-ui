import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { EncryptionService } from "../core/encryption.service";

@Injectable({
  providedIn: "root",
})
export class BlogPost {
  private API = environment.baseUrl;

  constructor(private http: HttpClient, private crypto: EncryptionService) {}

  // ==================== GET METHODS ====================

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/${id}`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.API}/categories`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  // ==================== POST/PUT METHODS ====================

  createPost(formData: FormData): Observable<any> {
    const encryptedFormData = this.encryptFormData(formData);
    return this.http.post(`${this.API}/blog/posts`, encryptedFormData).pipe(
      map((res: any) => {
        try {
          const decrypted = this.crypto.decrypt(res.data);
          return { ...res, data: decrypted };
        } catch (error) {
          console.error('Decryption error:', error);
          throw error;
        }
      })
    );
  }

  updatePost(id: number, formData: FormData): Observable<any> {
    const encryptedFormData = this.encryptFormData(formData);
    return this.http.put(`${this.API}/blog/posts/${id}`, encryptedFormData).pipe(
      map((res: any) => {
        try {
          const decrypted = this.crypto.decrypt(res.data);
          return { ...res, data: decrypted };
        } catch (error) {
          console.error('Decryption error:', error);
          throw error;
        }
      })
    );
  }

  savePost(id: number | null, formData: FormData): Observable<any> {
    if (id) {
      return this.updatePost(id, formData);
    } else {
      return this.createPost(formData);
    }
  }

  // ==================== HELPER ====================

  private encryptFormData(formData: FormData): FormData {
    // Extract all non-file fields
    const plainData: any = {};
    formData.forEach((value, key) => {
      if (!(value instanceof File)) {
        plainData[key] = value;
      }
    });

    // Encrypt fields
    const encryptedPayload = this.crypto.encrypt(plainData);

    // Build new FormData with encrypted payload + raw image
    const encryptedFormData = new FormData();
    encryptedFormData.append('encryptedPayload', encryptedPayload);

    // Re-attach image file as-is (can't encrypt binary)
    const imageFile = formData.get('image');
    if (imageFile instanceof File) {
      encryptedFormData.append('image', imageFile, imageFile.name);
    }

    return encryptedFormData;
  }
}
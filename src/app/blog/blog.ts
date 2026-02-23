import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../core/encryption.service';

export interface Post {
  id?: number;
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  category: string;
  category_id?: number;
  category_name?: string;
  author: string;
  author_id?: number;
  featuredImage?: string;
  featured_image?: string;
  tags: string[];
  status: 'draft' | 'published' | 'scheduled';
  views?: number;
  publishDate: string;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Blog {
  private API = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private crypto: EncryptionService
  ) {}

  // ==================== GET METHODS ====================

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/${id}`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${this.API}/blog/posts`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  getPublishedPosts(): Observable<any> {
    return this.http.get(`${this.API}/blog/posts`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  getPublishedPost(idOrSlug: string | number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/${idOrSlug}`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  getPostsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/category/${category}`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.API}/blog/categories`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  incrementViews(postId: number): Observable<any> {
    return this.http.post(`${this.API}/blog/posts/${postId}/view`, {}).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  // ==================== POST/PUT METHODS ====================

  savePost(id: number | null, formData: FormData): Observable<any> {
    // NOTE: FormData cannot be encrypted directly.
    // Extract fields, encrypt non-file data, then reattach image.
    const plainData: any = {};
    formData.forEach((value, key) => {
      if (!(value instanceof File)) {
        plainData[key] = value;
      }
    });

    const encryptedPayload = this.crypto.encrypt(plainData);
    const encryptedFormData = new FormData();
    encryptedFormData.append('encryptedPayload', encryptedPayload);

    // Re-attach image file if present
    const imageFile = formData.get('image');
    if (imageFile instanceof File) {
      encryptedFormData.append('image', imageFile, imageFile.name);
    }

    const request$ = id
      ? this.http.put(`${this.API}/blog/posts/${id}`, encryptedFormData)
      : this.http.post(`${this.API}/blog/posts`, encryptedFormData);

    return request$.pipe(
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

  deletePost(id: number): Observable<any> {
    const encryptedPayload = this.crypto.encrypt({ id });
    return this.http.delete(`${this.API}/blog/posts/${id}`, {
      body: { encryptedPayload }
    }).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  publishPost(id: number): Observable<any> {
    const encryptedPayload = this.crypto.encrypt({ id });
    return this.http.patch(`${this.API}/blog/posts/${id}/publish`, { encryptedPayload }).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }
}
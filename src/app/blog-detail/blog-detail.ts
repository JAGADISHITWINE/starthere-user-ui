import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../core/encryption.service';

@Injectable({
  providedIn: 'root'
})
export class BlogDetail {
  private API = environment.baseUrl;

  constructor(private http: HttpClient, private crypto: EncryptionService) {}

  // ==================== GET METHODS ====================

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/${id}`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  getRelatedPosts(categoryId: number, excludePostId: number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/related`, {
      params: {
        category_id: categoryId.toString(),
        exclude_id: excludePostId.toString(),
        limit: '3'
      }
    }).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  getComments(postId: number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/${postId}/comments`).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  // ==================== POST/PUT METHODS ====================

  addComment(commentData: any): Observable<any> {
    const encryptedPayload = this.crypto.encrypt(commentData);
    return this.http.post(`${this.API}/blog/comments`, { encryptedPayload }).pipe(
      map((res: any) => {
        try {
          const decrypted = this.crypto.encrypt(res.data);
          return { ...res, data: decrypted };
        } catch (error) {
          console.error('Decryption error:', error);
          throw error;
        }
      })
    );
  }

  likePost(postId: number): Observable<any> {
    const encryptedPayload = this.crypto.encrypt({ postId });
    return this.http.post(`${this.API}/blog/posts/${postId}/like`, { encryptedPayload }).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  likeComment(commentId: number): Observable<any> {
    const encryptedPayload = this.crypto.encrypt({ commentId });
    return this.http.post(`${this.API}/blog/comments/${commentId}/like`, { encryptedPayload }).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  updateComment(commentId: number, userId: number, content: string): Observable<any> {
    const encryptedPayload = this.crypto.encrypt({ user_id: userId, content });
    return this.http.put(`${this.API}/blog/comments/${commentId}`, { encryptedPayload }).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }

  deleteComment(commentId: number, userId: number): Observable<any> {
    const encryptedPayload = this.crypto.encrypt({ user_id: userId });
    return this.http.delete(`${this.API}/blog/comments/${commentId}`, {
      body: { encryptedPayload }
    }).pipe(
      map((res: any) => {
        const decrypted = this.crypto.decrypt(res.data);
        return { ...res, data: decrypted };
      })
    );
  }
}
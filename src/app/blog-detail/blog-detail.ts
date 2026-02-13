import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogDetail {

  private API = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/${id}`);
  }

  getRelatedPosts(categoryId: number, excludePostId: number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/related`, {
      params: {
        category_id: categoryId.toString(),
        exclude_id: excludePostId.toString(),
        limit: '3'
      }
    });
  }

  getComments(postId: number): Observable<any> {
    return this.http.get(`${this.API}/blog/posts/${postId}/comments`);
  }

  addComment(commentData: any): Observable<any> {
    return this.http.post(`${this.API}/blog/comments`, commentData);
  }

  likePost(postId: number): Observable<any> {
    return this.http.post(`${this.API}/blog/posts/${postId}/like`, {});
  }

  likeComment(commentId: number): Observable<any> {
    return this.http.post(`${this.API}/blog/comments/${commentId}/like`, {});
  }

  updateComment(commentId: number, userId: number, content: any): Observable<any> {

    const payload = {
      user_id: userId,
      content: content
    };

    return this.http.put(
      `${this.API}/blog/comments/${commentId}`,
      payload
    );
  }


  // ===============================
  // 🗑 DELETE COMMENT
  // ===============================
  deleteComment(commentId: number, userId: number,): Observable<any> {
    const payload = {
      user_id: userId,
    };
    return this.http.post(
      `${this.API}/blog/comments/${commentId}`, payload
    );
  }
}

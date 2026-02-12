import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../blog/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogDetail {


  private API = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPostById(id: number): Observable<Post> {
      return this.http.get<Post>(`${this.API}/postEditor/${id}`);
  }

  getRelatedPosts(categoryId: number, postId: number) {
    return this.http.get(
      `${this.API}/postEditor/related/${categoryId}/${postId}`
    );
  }

    // Get posts by category
  getPostsByCategory(category: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}/blog/posts/category/${category}`);
  }
}

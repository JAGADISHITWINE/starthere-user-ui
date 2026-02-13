import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  constructor(private http: HttpClient) {}

  // Get single post by ID
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.API}/blog/posts/${id}`);
  }

  // Get all posts (for admin)
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}/blog/posts`);
  }

  // Get published posts (for public blog)
  getPublishedPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}/blog/posts`);
  }

  // Get single published post by ID or slug (for public blog)
  getPublishedPost(idOrSlug: string | number): Observable<Post> {
    return this.http.get<Post>(`${this.API}/blog/posts/${idOrSlug}`);
  }

  // Get featured posts
  getFeaturedPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}/blog/posts/featured`);
  }

  // Get posts by category
  getPostsByCategory(category: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}/blog/posts/category/${category}`);
  }

  // Delete post
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API}/blog/posts/${id}`);
  }

  // Publish post
  publishPost(id: number): Observable<any> {
    return this.http.patch(`${this.API}/blog/posts/${id}/publish`, {});
  }

  // Get categories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/categories`);
  }

  // Increment view count
  incrementViews(postId: number): Observable<any> {
    return this.http.post(`${this.API}/blog/posts/${postId}/view`, {});
  }
}
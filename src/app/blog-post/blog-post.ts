import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Post } from "../blog/blog";

@Injectable({
  providedIn: "root",
})
export class BlogPost {
  private API = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // Update existing post with FormData
  updatePost(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.API}/blog/posts/${id}`, formData);
  }

  // Save post (create or update)
  savePost(id: number | null, formData: FormData): Observable<any> {
    if (id) {
      return this.updatePost(id, formData);
    } else {
      return this.createPost(formData);
    }
  }

  // Create new post with FormData
  createPost(formData: FormData): Observable<any> {
    return this.http.post(`${this.API}/blog/posts`, formData);
  }

  // Get categories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/categories`);
  }

  // Get single post by ID
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.API}/blog/posts/${id}`);
  }
}

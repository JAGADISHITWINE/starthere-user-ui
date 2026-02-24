import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogDetail } from "./blog-detail";
import { TokenService } from 'src/app/core/token.service';
import { FormsModule } from "@angular/forms";
import { AuthModalService } from "../auth/auth-modal.service";

interface Comment {
  id: number;
  userId: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
}

interface RelatedPost {
  id: number;
  title: string;
  image: string;
  category: string;
  readTime: string;
}

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class BlogDetailComponent implements OnInit {
  postId: any;
  newComment: string = "";
  isSubmittingComment: boolean = false;
  currentUserId: any | null = null;
  editingCommentId: any | null = null;
  editedContent: string = "";
  Loading = false;

  post!: {
    id: number;
    title: string;
    image: string;
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
    category: string;
    categoryId?: number;
    tags: string[];
    date: string;
    readTime: string;
    views: number;
    likes: number;
    content: string;
  };

  relatedPosts: RelatedPost[] = [];
  comments: Comment[] = [];
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogDetailService: BlogDetail,
    private authModal: AuthModalService,
    private tokenService: TokenService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = +params["id"];
      this.loadPost();
      this.loadComments();
      this.setCurrentUser();
    });
  }

  setCurrentUser() {
    if (!this.tokenService.isValid()) {
      this.currentUserId = null;
      return;
    }

    const decoded = this.tokenService.decode();
    this.currentUserId = decoded ? Number(decoded?.id ?? decoded?.userId ?? null) : null;
  }

  loadPost() {
    this.blogDetailService.getPostById(this.postId).subscribe((result: any) => {
      const res = result.data;
      this.post = {
        id: res.id,
        title: res.title,
        image: `http://localhost:4001/${res.featured_image}`,
        author: {
          name: res.author_name || "Admin",
          avatar: res.author_avatar || "https://ui-avatars.com/api/?name=Admin",
          bio: res.author_bio || "",
        },
        category: res.category,
        categoryId: res.category_id, // Store category ID for related posts
        tags: res.tags || [],
        date: res.published_at ? new Date(res.published_at).toDateString() : "",
        readTime: res.read_time || "5 min read",
        views: res.views || 0,
        likes: res.likes || 0,
        // sanitize HTML coming from server before binding to [innerHTML]
        content: res.content || '',
      };

      // Load related posts after getting the post data
      if (this.post.categoryId) {
        this.loadRelated(this.post.categoryId);
      }
    });
  }

  loadComments() {
    this.blogDetailService.getComments(this.postId).subscribe(
      (res: any) => {
        const commentsData = res.data || [];

        this.comments = commentsData.map((comment: any) => ({
          id: comment.id,
          userId: comment.user_id,
          author: {
            name: comment.author_name || "User",
            avatar:
              comment.author_avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "User")}&size=100`,
          },
          content: comment.content,
          date: this.formatCommentDate(comment.created_at),
          likes: comment.likes || 0,
          replies: comment.replies || [],
        }));
      },
      (error) => {
        console.error("Error loading comments:", error);
        this.comments = [];
      },
    );
  }

  loadRelated(categoryId: number) {
    this.blogDetailService
      .getRelatedPosts(categoryId, this.postId)
      .subscribe((res: any) => {
        if (res.success == true) {
          this.Loading = false;
          const relatedData = res.data || [];
          this.relatedPosts = relatedData.map((post: any) => ({
            id: post.id,
            title: post.title,
            image: `http://localhost:4001/${post.featured_image}`,
            category: post.category,
            readTime: post.read_time || "5 min",
          }));
        } else {
          this.relatedPosts = res.data || [];
          this.Loading = true;
        }
      });
  }

  async openLoginPanel() {
    try {
      const res = await this.authModal.openLogin();
    } catch (err) {}
  }

  postComment() {
    if (!this.newComment?.trim()) return;

    if (!this.tokenService.isValid()) {
      this.openLoginPanel();
      return; // 🚀 hard stop
    }

    const decodedUser: any = this.tokenService.decode();

    if (!decodedUser?.id) {
      this.openLoginPanel();
      return;
    }

    this.isSubmittingComment = true;

    const commentData = {
      post_id: this.postId,
      content: this.newComment.trim(),
    };

    this.blogDetailService.addComment(commentData).subscribe(
      (res: any) => {
        const comment = res.data;

        this.comments.unshift({
          id: comment.id,
          userId: comment.user_id,
          author: {
            name: comment.author_name,
            avatar:
              comment.author_avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "User")}&size=100`,
          },
          content: comment.content,
          date: "Just now",
          likes: 0,
        });

        this.newComment = "";
        this.isSubmittingComment = false;
      },
      (error) => {
        console.error("Error posting comment:", error);
        this.isSubmittingComment = false;
      },
    );
  }

  likePost() {
    this.blogDetailService.likePost(this.postId).subscribe(
      (res: any) => {
        this.post.likes = res.data.likes;
      },
      (error) => {
        console.error("Error liking post:", error);
      },
    );
  }

  likeComment(commentId: number) {
    this.blogDetailService.likeComment(commentId).subscribe(
      (res: any) => {
        const comment = this.comments.find((c) => c.id === commentId);
        if (comment) {
          comment.likes = res.data.likes;
        }
      },
      (error) => {
        console.error("Error liking comment:", error);
      },
    );
  }

  viewRelatedPost(postId: number) {
    this.router.navigate(["/blog", postId]).then(() => {
      // Reload the page to fetch new data
      window.location.reload();
    });
  }

  getCategoryLabel(category: string): string {
    return category.replace(/-/g, " ");
  }

  formatCommentDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60)
      return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
    if (diffHours < 24)
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

    return date.toLocaleDateString();
  }

  startEdit(comment: any) {
    this.editingCommentId = comment.id;
    this.editedContent = comment.content;
  }

  cancelEdit() {
    this.editingCommentId = null;
    this.editedContent = "";
  }

  updateComment(commentId: number) {
    if (!this.editedContent.trim()) return;

    const content = this.editedContent.trim();

    this.blogDetailService
      .updateComment(commentId, this.currentUserId, content)
      .subscribe(
        (res: any) => {
          if (res.success == true) {
            this.cancelEdit();
            this.loadComments();
          }
        },
        (err) => {
          console.error("Update failed", err);
        },
      );
  }

  deleteComment(commentId: number) {
    this.blogDetailService
      .deleteComment(commentId, this.currentUserId)
      .subscribe(
        (res: any) => {
          if (res.success == true) {
            this.comments = this.comments.filter((c) => c.id !== commentId);
            this.loadComments();
            this.cancelEdit();
          }
        },
        (err) => {
          console.error("Delete failed", err);
        },
      );
  }

  createPost() {
    this.router.navigate(["/blog-post"]);
  }
}

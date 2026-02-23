import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule, LoadingController } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { Blog } from "./blog";
import { environment } from "src/environments/environment";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string | null;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  views: number;
  featured?: boolean;
}

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class BlogComponent implements OnInit {
  selectedCategory: string = "all";
  searchQuery: string = "";
  isLoading: boolean = false;

  categories = [
    { value: "all", label: "All Posts", icon: "apps" },
    { value: "trek-guides", label: "Trek Guides", icon: "map" },
    { value: "tips-tricks", label: "Tips & Tricks", icon: "bulb" },
    { value: "gear-reviews", label: "Gear Reviews", icon: "bag-handle" },
    { value: "travel-stories", label: "Travel Stories", icon: "book" },
    { value: "safety", label: "Safety", icon: "shield-checkmark" },
    { value: "destinations", label: "Destinations", icon: "location" },
  ];

  allPosts: BlogPost[] = [];
  popularTags: string[] = [];
  readonly assetBaseUrl = environment.assetBaseUrl;

  constructor(
    private router: Router,
    private blogService: Blog,
    private loadingController: LoadingController,
  ) {}

  ngOnInit() {
    this.loadPosts();
    this.loadCategories();
  }

  async loadPosts() {
    this.isLoading = true;
    const loading = await this.loadingController.create({
      message: "Loading posts...",
    });
    await loading.present();

    this.blogService.getPublishedPosts().subscribe({
      next: (posts: any) => {
        this.allPosts = posts.data.map((post: any) =>
          this.mapPostToBlogPost(post),
        );
        this.extractPopularTags();
        loading.dismiss();
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading posts:", error);
        loading.dismiss();
        this.isLoading = false;
      },
    });
  }

  async loadCategories() {
    this.blogService.getCategories().subscribe({
      next: (categories) => {
        // Map backend categories to frontend format
        const mappedCategories = categories.map((cat: { slug?: string; name: string }) => ({
          value: cat.slug || cat.name.toLowerCase().replace(/\s+/g, "-"),
          label: cat.name,
          icon: this.getCategoryIconByName(cat.name),
        }));

        // Keep "All Posts" at the beginning
        this.categories = [
          { value: "all", label: "All Posts", icon: "apps" },
          ...mappedCategories,
        ];
      },
      error: (error) => {
        console.error("Error loading categories:", error);
      },
    });
  }

  mapPostToBlogPost(post: any): BlogPost {
    return {
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: this.buildAssetUrl(post.featured_image),
      author: {
        name: post.author_name || "Admin",
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author_name || "Admin")}&size=100`,
      },
      category: this.slugify(post.category_name || post.category),
      tags: post.tags || [],
      date: this.formatDate(post.published_at || post.created_at),
      readTime: this.calculateReadTime(post.content),
      views: post.views || 0,
      featured: post.views > 2000,
    };
  }

  private buildAssetUrl(path?: string | null): string | null {
    if (!path) return null;

    const cleanPath = String(path).replace(/^\/+/, "");
    return `${this.assetBaseUrl}/${cleanPath}`;
  }

  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  }

  formatDate(dateString?: string): string {
    if (!dateString) return "Recently";

    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  }

  calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  extractPopularTags() {
    const tagFrequency: { [key: string]: number } = {};

    this.allPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
      });
    });

    // Sort tags by frequency and get top 12
    this.popularTags = Object.entries(tagFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([tag]) => tag);
  }

  getCategoryIconByName(name: string): string {
    const iconMap: { [key: string]: string } = {
      "Trek Guides": "map",
      "Tips & Tricks": "bulb",
      "Gear Reviews": "bag-handle",
      "Travel Stories": "book",
      Safety: "shield-checkmark",
      Destinations: "location",
    };
    return iconMap[name] || "document-text";
  }

  get featuredPosts(): BlogPost[] {
    return this.allPosts.filter((post) => post.featured).slice(0, 3);
  }

  get filteredPosts(): BlogPost[] {
    let posts = this.allPosts;

    // Filter by category
    if (this.selectedCategory !== "all") {
      posts = posts.filter((post) => post.category === this.selectedCategory);
    }

    // Filter by search
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    // Exclude featured posts from regular list if showing all
    if (this.selectedCategory === "all" && !this.searchQuery) {
      posts = posts.filter((post) => !post.featured);
    }

    return posts;
  }

  viewPost(postId: number) {
    // Increment view count
    this.blogService.incrementViews(postId).subscribe({
      next: () => {
        this.router.navigate(["/blog-details", postId]);
      },
    });
  }

  filterByTag(tag: string) {
    this.searchQuery = tag;
  }

  getCategoryIcon(category: string): string {
    const cat = this.categories.find((c) => c.value === category);
    return cat ? cat.icon : "document-text";
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      "trek-guides": "primary",
      "tips-tricks": "success",
      "gear-reviews": "warning",
      "travel-stories": "tertiary",
      safety: "danger",
      destinations: "secondary",
    };
    return colors[category] || "medium";
  }

  get categoryTitle(): string {
    if (this.selectedCategory === "all") {
      return "Latest Articles";
    }

    const category = this.categories.find(
      (c) => c.value === this.selectedCategory,
    );

    return category?.label ?? "Latest Articles";
  }

  refreshPosts(event?: any) {
    this.loadPosts();
    if (event) {
      setTimeout(() => {
        event.target.complete();
      }, 1000);
    }
  }

  createPost() {
    this.router.navigate(["/blog-post"]);
  }
}

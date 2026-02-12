import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDetail } from './blog-detail';

interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
}

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class BlogDetailComponent implements OnInit {

  postId: any;

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
    tags: string[];
    date: string;
    readTime: string;
    views: number;
    likes: number;
    content: string;
  };


  relatedPosts = [
    {
      id: 2,
      title: '10 Essential Items Every Trekker Must Carry',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
      category: 'tips-tricks',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Monsoon Trekking Safety: 15 Critical Tips',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
      category: 'safety',
      readTime: '9 min'
    },
    {
      id: 6,
      title: 'Exploring Coorg: Top 5 Treks for Beginners',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      category: 'destinations',
      readTime: '8 min'
    }
  ];

  comments: Comment[] = [
    {
      id: 1,
      author: {
        name: 'Arun Sharma',
        avatar: 'https://ui-avatars.com/api/?name=Arun+Sharma&size=100'
      },
      content: 'Great guide! Did this trek last month and your tips were spot on. The sunrise from the peak was absolutely breathtaking.',
      date: '2 days ago',
      likes: 12
    },
    {
      id: 2,
      author: {
        name: 'Neha Patel',
        avatar: 'https://ui-avatars.com/api/?name=Neha+Patel&size=100'
      },
      content: 'Very comprehensive guide. One addition - trekking poles are highly recommended, especially for the descent. Saved my knees!',
      date: '5 days ago',
      likes: 8
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogDetailService: BlogDetail
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
    });
    this.loadPost();
  }

  loadPost() {
    this.blogDetailService.getPostById(this.postId).subscribe((res: any) => {

      this.post = {
        id: res.id,
        title: res.title,
        image: `http://localhost:4001/${res.featured_image}`, // full image path
        author: {
          name: res.author_name || 'Admin',
          avatar: res.author_avatar || 'https://ui-avatars.com/api/?name=Admin',
          bio: res.author_bio || ''
        },
        category: res.category, // ✅ FIXED (was category_slug)
        tags: res.tags || [],
        date: res.published_at
          ? new Date(res.published_at).toDateString()
          : '',
        readTime: res.read_time || '5 min read',
        views: res.views || 0,
        likes: res.likes || 0,
        content: res.content
      };

    });
  }


  loadRelated(categoryId: number) {
    this.blogDetailService
      .getRelatedPosts(categoryId, this.postId)
      .subscribe((res: any) => {
        this.relatedPosts = res;
      });
  }

  // async sharPost() {
  //   if (navigator.share) {
  //     await navigator.share({
  //       title: this.post.title,
  //       text: 'Check out this article',
  //       url: window.location.href
  //     });
  //   }
  // }

  viewRelatedPost(postId: number) {
    this.router.navigate(['/blog', postId]);
  }

  getCategoryLabel(category: string): string {
    return category.replace(/-/g, ' ');
  }

}

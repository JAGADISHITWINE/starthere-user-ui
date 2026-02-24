import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  IonicModule,
  ToastController,
  LoadingController,
} from "@ionic/angular";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogPost } from "./blog-post";
import { AuthModalService } from "../auth/auth-modal.service";
import { TokenService } from 'src/app/core/token.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule, NgxMatTimepickerModule,],
})
export class BlogPostComponent implements OnInit {
  postId: number | null = null;
  isEditMode: boolean = false;
  postForm!: FormGroup;

  // Image handling
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  existingImageUrl: string | null = null;

  categories = [
    "Trek Guides",
    "Tips & Tricks",
    "Gear Reviews",
    "Travel Stories",
    "Safety",
    "Destinations",
  ];

  // Section types available
  sectionTypes = [
    {
      value: "text",
      label: "Text Section",
      icon: "document-text-outline",
      description: "Add paragraphs and text content",
    },
    {
      value: "list",
      label: "List Section",
      icon: "list-outline",
      description: "Add bullet or numbered lists",
    },
    {
      value: "quote",
      label: "Quote Block",
      icon: "chatbox-outline",
      description: "Add quotes or testimonials",
    },
    {
      value: "tip",
      label: "Tip Box",
      icon: "bulb-outline",
      description: "Highlight helpful tips",
    },
    {
      value: "warning",
      label: "Warning Box",
      icon: "alert-circle-outline",
      description: "Important warnings or notes",
    },
  ];

  // Examples modal
  showExamplesModal = false;
  selectedExample: string = "trek";

  examples = {
    trek: {
      title: "Trek Guide Example",
      data: {
        title: "Complete Guide to Kodachadri Trek",
        excerpt:
          "Discover everything you need to know about the stunning Kodachadri trek in Karnataka. This comprehensive guide covers difficulty levels, best season, route details, and essential tips.",
        category: "Trek Guides",
        tags: [
          "Kodachadri Trek",
          "Karnataka Treks",
          "Western Ghats",
          "Weekend Trek",
          "Trekking Guide",
        ],
        sections: [
          {
            type: "text",
            heading: "Introduction",
            content:
              "Kodachadri Peak, standing tall at 1,343 meters in Karnataka, is one of the most scenic treks in the Western Ghats. Whether you're a beginner or experienced trekker, this trek offers unforgettable experiences.",
          },
          {
            type: "list",
            heading: "Trek Difficulty",
            listType: "bullet",
            listItems: [
              "Level: Easy to Moderate",
              "Duration: 1-2 days",
              "Distance: 10-12 km",
              "Altitude Gain: ~900 meters",
              "Suitable for: Beginners with reasonable fitness",
            ],
          },
          {
            type: "text",
            heading: "Best Time to Visit",
            content:
              "October to February is ideal with pleasant weather and clear views. Monsoon (June-September) offers lush greenery but slippery trails. Avoid March-May due to heat.",
          },
          {
            type: "list",
            heading: "What to Carry",
            listType: "bullet",
            listItems: [
              "Trekking shoes with good grip",
              "3 liters of water",
              "Energy bars and snacks",
              "First aid kit",
              "Flashlight or headlamp",
              "Raincoat",
              "Warm jacket",
            ],
          },
          {
            type: "tip",
            heading: "Pro Tip",
            content:
              "Start your trek by 6 AM to reach the summit for sunrise views and avoid afternoon heat. The early morning mist makes for spectacular photographs!",
          },
          {
            type: "warning",
            heading: "Safety Warning",
            content:
              "The trail can be slippery during monsoon. Use trekking poles if needed. Mobile network is weak, so inform someone about your plans before starting.",
          },
        ],
      },
    },
    review: {
      title: "Gear Review Example",
      data: {
        title: "Best Trekking Shoes 2024: Detailed Review",
        excerpt:
          "After testing 15 different trekking shoes over 6 months on various terrains, here's my comprehensive review of the best trekking shoes for Indian conditions.",
        category: "Gear Reviews",
        tags: [
          "Trekking Shoes",
          "Gear Review",
          "Hiking Equipment",
          "Product Review",
        ],
        sections: [
          {
            type: "text",
            heading: "Product Overview",
            content:
              "The Wildcraft Hypagrip Pro has been my go-to trekking shoe for the past 6 months. Tested across monsoon trails, rocky terrain, and high-altitude treks, here's everything you need to know.",
          },
          {
            type: "list",
            heading: "Key Features",
            listType: "bullet",
            listItems: [
              "Waterproof membrane technology",
              "Advanced grip sole pattern",
              "Ankle support system",
              "Breathable mesh panels",
              "Reinforced toe cap",
              "Lightweight (350g per shoe)",
            ],
          },
          {
            type: "text",
            heading: "My Testing Experience",
            content:
              "I used these shoes on 12 different treks ranging from easy day hikes to challenging multi-day expeditions. The grip on wet rocks was exceptional, and my feet stayed dry even during heavy monsoon treks.",
          },
          {
            type: "list",
            heading: "Pros and Cons",
            listType: "bullet",
            listItems: [
              "✅ Excellent grip on all terrains",
              "✅ Truly waterproof",
              "✅ Comfortable for long distances",
              "❌ Takes time to break in",
              "❌ Slightly expensive (₹8,999)",
            ],
          },
          {
            type: "quote",
            content:
              "These are hands down the best trekking shoes I've owned. Worth every penny!",
            heading: "- Amit Sharma, Trek Leader",
          },
          {
            type: "tip",
            heading: "Best For",
            content:
              "Perfect for beginners to intermediate trekkers. Ideal for monsoon treks and rocky terrain. Not recommended for extreme high-altitude mountaineering.",
          },
        ],
      },
    },
    story: {
      title: "Travel Story Example",
      data: {
        title: "My Solo Trip to Ladakh: A Journey of Self-Discovery",
        excerpt:
          "How a spontaneous solo trip to Ladakh taught me more about myself than any self-help book ever could. This is my story of adventure, challenges, and beautiful encounters.",
        category: "Travel Stories",
        tags: [
          "Ladakh",
          "Solo Travel",
          "Bike Trip",
          "Travel Story",
          "Adventure",
        ],
        sections: [
          {
            type: "text",
            heading: "Day 1: The Decision",
            content:
              "It was 2 AM when I booked my flight to Leh. No planning, no itinerary, just a sudden urge to escape the monotony of city life. By 9 AM, I was on a plane to one of the most beautiful places on Earth.",
          },
          {
            type: "quote",
            content:
              "The moment I stepped out of Leh airport and felt that crisp mountain air, I knew this trip would change me forever.",
            heading: "",
          },
          {
            type: "text",
            heading: "Day 2: Acclimatization and New Friends",
            content:
              "Spent the day walking around Leh market, fighting altitude sickness. Met Sara, a solo traveler from Germany, at a café. We decided to explore Nubra Valley together the next day.",
          },
          {
            type: "text",
            heading: "Day 3-5: The Nubra Valley Adventure",
            content:
              "The ride through Khardung La pass was terrifying and exhilarating. Sand dunes, double-humped camels, and the warmest hospitality from locals. Every moment felt surreal.",
          },
          {
            type: "list",
            heading: "Things I Learned",
            listType: "numbered",
            listItems: [
              "Traveling solo doesn't mean being alone",
              "The best experiences are unplanned",
              "Locals know the hidden gems",
              "Your comfort zone is overrated",
              "Nature has a way of healing you",
            ],
          },
          {
            type: "tip",
            heading: "Travel Advice",
            content:
              "Don't over-plan. Leave room for spontaneity. Talk to locals. Say yes to unexpected opportunities. Carry a good camera and a journal.",
          },
        ],
      },
    },
  };
  userId: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postEditorService: BlogPost,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private authModal: AuthModalService,
    private tokenService: TokenService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.postId = +params["id"];
        this.isEditMode = true;
        this.loadPost(this.postId);
      }
    });
  }


  initForm() {
    this.postForm = this.fb.group({
      title: ["", Validators.required],
      excerpt: ["", Validators.required],
      sections: this.fb.array([]), // Dynamic sections
      category: ["", Validators.required],
      tags: this.fb.array([this.createTagControl()]),
      status: ["draft"],
      publishDate: [new Date(), Validators.required],
      publishTime: [this.getCurrentTime(), Validators.required],
      author: ["Admin", Validators.required],
      image: ["", Validators.required],
    });
  }

  getCurrentTime(): string {
  const now = new Date();
  const h = now.getHours() % 12 || 12;
  const m = now.getMinutes().toString().padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  return `${h}:${m} ${ampm}`;
}


  // ==================== SECTION MANAGEMENT ====================

  get sections(): FormArray {
    return this.postForm.get("sections") as FormArray;
  }

  createSectionGroup(type: string): FormGroup {
    const group = this.fb.group({
      type: [type, Validators.required],
      heading: [""],
      content: [""],
      listItems: this.fb.array([]),
      listType: ["bullet"],
    });

    // Initialize list items for list section
    if (type === "list") {
      const listItems = group.get("listItems") as FormArray;
      listItems.push(this.fb.control(""));
      listItems.push(this.fb.control(""));
    }

    return group;
  }

  addSection(type: string) {
    this.sections.push(this.createSectionGroup(type));
    this.showToast(`${this.getSectionLabel(type)} added`, "success");
  }

  removeSection(index: number) {
    this.sections.removeAt(index);
    this.showToast("Section removed", "success");
  }

  moveSection(index: number, direction: "up" | "down") {
    if (direction === "up" && index > 0) {
      const section = this.sections.at(index);
      this.sections.removeAt(index);
      this.sections.insert(index - 1, section);
    } else if (direction === "down" && index < this.sections.length - 1) {
      const section = this.sections.at(index);
      this.sections.removeAt(index);
      this.sections.insert(index + 1, section);
    }
  }

  getSectionLabel(type: string): string {
    return this.sectionTypes.find((st) => st.value === type)?.label || type;
  }

  getSectionIcon(type: string): string {
    return (
      this.sectionTypes.find((st) => st.value === type)?.icon ||
      "document-outline"
    );
  }

  // ==================== LIST ITEM MANAGEMENT ====================

  getListItems(sectionIndex: number): FormArray {
    return this.sections.at(sectionIndex).get("listItems") as FormArray;
  }

  addListItem(sectionIndex: number) {
    const listItems = this.getListItems(sectionIndex);
    listItems.push(this.fb.control(""));
  }

  removeListItem(sectionIndex: number, itemIndex: number) {
    const listItems = this.getListItems(sectionIndex);
    if (listItems.length > 1) {
      listItems.removeAt(itemIndex);
    } else {
      this.showToast("List must have at least one item", "warning");
    }
  }

  // ==================== TAG MANAGEMENT ====================

  get tags(): FormArray {
    return this.postForm.get("tags") as FormArray;
  }

  createTagControl(value: string = ""): FormControl {
    return this.fb.control(value);
  }

  addTag() {
    this.tags.push(this.createTagControl());
  }

  removeTag(index: number) {
    if (this.tags.length > 1) {
      this.tags.removeAt(index);
    }
  }

  // ==================== IMAGE HANDLING ====================

  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        this.showToast("Please select an image file", "warning");
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        this.showToast("Image size should be less than 5MB", "warning");
        return;
      }

      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);

      this.showToast("Image selected successfully", "success");
    }
  }

  removeImage() {
    this.selectedFile = null;
    this.imagePreview = null;
    this.existingImageUrl = null;

    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }

    this.showToast("Image removed", "success");
  }

  // ==================== LOAD POST ====================

  loadPost(id: number) {
    this.postEditorService.getPost(id).subscribe({
      next: (post: any) => {
        // Clear existing tags
        while (this.tags.length) {
          this.tags.removeAt(0);
        }

        // Load tags
        if (post.tags && post.tags.length > 0) {
          post.tags.forEach((tag: string) => {
            this.tags.push(this.createTagControl(tag));
          });
        } else {
          this.tags.push(this.createTagControl());
        }

        // Clear existing sections
        while (this.sections.length) {
          this.sections.removeAt(0);
        }

        // Load sections
        if (post.sections && Array.isArray(post.sections)) {
          post.sections.forEach((section: any) => {
            const sectionGroup = this.createSectionGroup(section.type);

            // Set basic fields
            sectionGroup.patchValue({
              type: section.type,
              heading: section.heading || "",
              content: section.content || "",
              listType: section.listType || "bullet",
            });

            // Load list items
            if (section.type === "list" && section.listItems) {
              const listItems = sectionGroup.get("listItems") as FormArray;
              listItems.clear();
              section.listItems.forEach((item: string) => {
                listItems.push(this.fb.control(item));
              });
            }

            this.sections.push(sectionGroup);
          });
        } else if (post.content) {
          // Legacy: Convert old HTML content to a single text section
          const textSection = this.createSectionGroup("text");
          textSection.patchValue({
            heading: "Content",
            content: this.stripHtml(post.content),
          });
          this.sections.push(textSection);
        }

        // Set existing image
        if (post.featured_image) {
          this.existingImageUrl = post.featured_image;
          this.imagePreview = post.featured_image;
        }

        // Patch form
        this.postForm.patchValue({
          title: post.title,
          excerpt: post.excerpt,
          category: post.category,
          status: post.status,
          publishDate: post.published_at || new Date().toISOString(),
          author: post.author_id || "Admin",
        });
      },
      error: (err) => {
        console.error("Error loading post:", err);
        this.showToast("Failed to load post", "danger");
      },
    });
  }

  // Helper to strip HTML tags for legacy content
  stripHtml(html: string): string {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  // ==================== SAVE POST ====================

  async publish() {
    if (this.postForm.invalid) {
      Object.keys(this.postForm.controls).forEach((key) => {
        this.postForm.get(key)?.markAsTouched();
      });
      this.showToast("Please fill all required fields", "warning");
      return;
    }

    if (this.sections.length === 0) {
      this.showToast("Please add at least one content section", "warning");
      return;
    }

    this.postForm.patchValue({ status: "published" });
    await this.savePost();
  }

  async savePost() {
    if (!this.tokenService.isValid()) {
      this.openLoginPanel();
      return;
    } else {
      const loading = await this.loadingController.create({
        message: "Saving post...",
      });
      await loading.present();

      const decoded = this.tokenService.decode();
      this.userId = decoded ? (decoded.id ?? decoded.userId ?? null) : null;

      const formValue = { ...this.postForm.value };

      // Filter out empty tags
      formValue.tags = formValue.tags.filter(
        (tag: string) => tag && tag.trim() !== "",
      );

      // Convert sections to HTML for backward compatibility
      const htmlContent = this.sectionsToHtml(formValue.sections);
      const dateVal = new Date(formValue.publishDate);
      const [time, period] = formValue.publishTime.split(' ');
      const [hours, minutes] = time.split(':').map(Number);
      const h24 = period === 'PM' ? (hours % 12) + 12 : hours % 12;
      dateVal.setHours(h24, minutes, 0, 0);

      // Create FormData
      const formData = new FormData();

      formData.append("title", formValue.title);
      formData.append("excerpt", formValue.excerpt);
      formData.append("content", htmlContent); // HTML version
      formData.append("sections", JSON.stringify(formValue.sections)); // Structured data
      formData.append("category", formValue.category);
      formData.append("status", formValue.status);
      formData.append('publishDate', dateVal.toISOString());
      formData.append("author", formValue.author);
      formData.append("tags", JSON.stringify(formValue.tags));

      if (this.userId) {
        formData.append('userId', this.userId);
      }

      // Append image
      if (this.selectedFile) {
        formData.append("image", this.selectedFile, this.selectedFile.name);
      } else if (this.existingImageUrl && this.imagePreview) {
        formData.append("existingImageUrl", this.existingImageUrl);
      }

      this.postEditorService.savePost(this.postId, formData).subscribe({
        next: (res: any) => {
          loading.dismiss();
          this.showToast("Post saved successfully!", "success");
          this.router.navigate(["/admin/blog/posts"]);
        },
        error: (err: any) => {
          loading.dismiss();
          console.error("Error saving post:", err);
          this.showToast("Failed to save post", "danger");
        },
      });
    }
  }

  async openLoginPanel() {
    try {
      const res = await this.authModal.openLogin();
    } catch (err) { }
  }

  // Convert sections to HTML
  sectionsToHtml(sections: any[]): string {
    let html = "";

    sections.forEach((section) => {
      switch (section.type) {
        case "text":
          if (section.heading) {
            html += `<h2>${this.escapeHtml(section.heading)}</h2>\n`;
          }
          if (section.content) {
            html += `<p>${this.escapeHtml(section.content).replace(/\n/g, "<br>")}</p>\n\n`;
          }
          break;

        case "list":
          if (section.heading) {
            html += `<h2>${this.escapeHtml(section.heading)}</h2>\n`;
          }
          const listTag = section.listType === "numbered" ? "ol" : "ul";
          html += `<${listTag}>\n`;
          section.listItems?.forEach((item: string) => {
            if (item && item.trim()) {
              html += `  <li>${this.escapeHtml(item)}</li>\n`;
            }
          });
          html += `</${listTag}>\n\n`;
          break;

        case "quote":
          if (section.content) {
            html += `<blockquote>\n  <p>${this.escapeHtml(section.content)}</p>\n`;
            if (section.heading) {
              html += `  <cite>${this.escapeHtml(section.heading)}</cite>\n`;
            }
            html += `</blockquote>\n\n`;
          }
          break;

        case "tip":
          if (section.heading || section.content) {
            html += `<div class="callout callout-tip">\n`;
            if (section.heading) {
              html += `  <h3>💡 ${this.escapeHtml(section.heading)}</h3>\n`;
            }
            if (section.content) {
              html += `  <p>${this.escapeHtml(section.content).replace(/\n/g, "<br>")}</p>\n`;
            }
            html += `</div>\n\n`;
          }
          break;

        case "warning":
          if (section.heading || section.content) {
            html += `<div class="callout callout-warning">\n`;
            if (section.heading) {
              html += `  <h3>⚠️ ${this.escapeHtml(section.heading)}</h3>\n`;
            }
            if (section.content) {
              html += `  <p>${this.escapeHtml(section.content).replace(/\n/g, "<br>")}</p>\n`;
            }
            html += `</div>\n\n`;
          }
          break;
      }
    });

    return html;
  }

  escapeHtml(text: string): string {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // ==================== EXAMPLES MODAL ====================

  openExamplesModal() {
    this.showExamplesModal = true;
  }

  closeExamplesModal() {
    this.showExamplesModal = false;
  }

  selectExample(type: string) {
    this.selectedExample = type;
  }

  loadExample(type: string) {
    const example = this.examples[type as keyof typeof this.examples];
    if (!example) return;

    // Load basic fields
    this.postForm.patchValue({
      title: example.data.title,
      excerpt: example.data.excerpt,
      category: example.data.category,
    });

    // Clear and load tags
    while (this.tags.length) {
      this.tags.removeAt(0);
    }
    example.data.tags.forEach((tag) => {
      this.tags.push(this.createTagControl(tag));
    });

    // Clear and load sections
    while (this.sections.length) {
      this.sections.removeAt(0);
    }
    example.data.sections.forEach((section) => {
      const sectionGroup = this.createSectionGroup(section.type);
      sectionGroup.patchValue(section);

      if (section.type === "list" && section.listItems) {
        const listItems = sectionGroup.get("listItems") as FormArray;
        listItems.clear();
        section.listItems.forEach((item) => {
          listItems.push(this.fb.control(item));
        });
      }

      this.sections.push(sectionGroup);
    });

    this.closeExamplesModal();
    this.showToast(
      "Example loaded successfully! You can now edit or publish.",
      "success",
    );
  }

  // ==================== UTILITIES ====================

  async showToast(
    message: string,
    color: "success" | "danger" | "warning" = "success",
  ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top",
      color: color,
    });
    toast.present();
  }

  getSectionClass(type: string): string {
    const map: Record<string, string> = {
      text: "pill-text",
      list: "pill-list",
      quote: "pill-quote",
      tip: "pill-tip",
      warning: "pill-warning",
    };
    return map[type] || "pill-text";
  }
}

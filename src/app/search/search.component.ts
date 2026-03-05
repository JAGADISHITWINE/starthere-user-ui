import {
  Component,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchService } from './search.service';
import { AuthModalService } from '../auth/auth-modal.service';
import { Router } from '@angular/router';
import { DropdownService } from '../core/dropdown.service';
import { PublicRouteIdService } from '../core/public-route-id.service';
import { environment } from 'src/environments/environment';

export interface TrekTour {
  id?: number;
  publicId?: string;
  name: string;
  description: string;
  location: string;
  difficulty: string;
  price: number;
  has_available_slots?: boolean;
  date: string;
  duration?: string;
  rating?: number;
  reviews?: number;
  maxGroupSize?: number;
  featured?: boolean;
  coverColor?: string;
  remainingSlots?: number;
  cover_image?: any;
  landscapePath?: string;
}

export interface SearchParams {
  location: string;
  difficulty: string;
  date: string;
}

interface SearchDifficultyOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
})
export class SearchComponent implements OnInit {
  private readonly mediaBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');

  constructor(
    private searchService: SearchService,
    private authModal: AuthModalService,
    private router: Router,
    private dropdownService: DropdownService,
    private publicRouteId: PublicRouteIdService,
  ) { }

  loading = false;
  error: string | null = null;

  allTreks: TrekTour[] = [];
  treksTours: TrekTour[] = [];
  difficultyOptions: SearchDifficultyOption[] = [];

  searchParams: SearchParams = {
    location: '',
    difficulty: '',
    date: '',
  };

  ngOnInit() {
    this.loadDifficultyOptions();
    this.loadInitial();
  }

  private loadDifficultyOptions() {
    this.dropdownService.getOptions('trek-difficulty', []).subscribe((options) => {
      if (options.length > 0) {
        this.difficultyOptions = options.map((opt) => ({
          value: (opt.value || '').toLowerCase(),
          label: this.diffLabel(opt.label || opt.value || ''),
        }));
      }
    });
  }

  // ===============================
  // LOAD TREKS FROM API
  // ===============================
  loadInitial() {
    this.loading = true;
    this.error = null;

    this.searchService.getTreksTours().subscribe({
      next: (res: any) => {

        // Handle both array or { data: [] }
        const data = Array.isArray(res)
          ? res
          : Array.isArray(res?.data.result)
            ? res.data.result
            : [];

        if (!Array.isArray(data)) {
          this.error = 'Invalid server response';
          this.loading = false;
          return;
        }

        const mapped: TrekTour[] = data.map((t: any) => {

          const firstBatch = t.batches?.[0] ?? null;

          return {
            id: t.id,
            publicId: String(t.detail_public_ref || t.public_ref || t.uuid || t.trek_uuid || t.id || ''),
            name: t.name,
            description: t.description,
            location: t.location,
            difficulty: t.difficulty?.toLowerCase(),
            price: firstBatch
              ? Number(firstBatch.price)
              : Number(t.starting_price),
            date: firstBatch?.startDate ?? t.earliest_start_date,
            duration: firstBatch?.duration ?? t.duration,
            rating: t.rating ?? null,
            reviews: t.reviews ?? null,
            maxGroupSize: t.max_group_size ?? null,
            featured: t.highlight_count > 0,
            coverColor: this.randomGradient(),
            has_available_slots: t.has_available_slots,
            remainingSlots: firstBatch?.remainingSlots ?? 0,
            cover_image: t.cover_image
              ? `${this.mediaBaseUrl}${String(t.cover_image).replace(/^\/+/, '')}`
              : null,
            landscapePath: t.landscape_path ?? null,
          };
        });

        // Only show available treks
        this.allTreks = mapped.filter(t => t.has_available_slots);
        this.treksTours = [...this.allTreks];
        if (this.difficultyOptions.length === 0) {
          this.buildDifficultyOptions();
        }

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load treks';
        this.loading = false;
      }
    });
  }

  // ===============================
  // SEARCH FILTER
  // ===============================
  onSearch() {

    const location = this.searchParams.location.trim().toLowerCase();
    const difficulty = this.searchParams.difficulty.trim().toLowerCase();
    const date = this.searchParams.date;

    const filtered = this.allTreks.filter(t => {

      const locMatch =
        !location ||
        t.location?.toLowerCase().includes(location) ||
        t.name?.toLowerCase().includes(location);

      const diffMatch =
        !difficulty ||
        t.difficulty === difficulty;

      const trekDate = t.date
        ? new Date(t.date).toISOString().split('T')[0]
        : '';

      const dateMatch =
        !date ||
        trekDate === date;

      return locMatch && diffMatch && dateMatch;
    });

    this.treksTours = [...filtered];

    console.log(this.searchParams);
    console.log(this.treksTours);
  }

  // ===============================
  // RESET SEARCH
  // ===============================
  resetSearch() {
    this.searchParams = {
      location: '',
      difficulty: '',
      date: '',
    };

    this.treksTours = [...this.allTreks];
  }

  // ===============================
  // ACTIONS
  // ===============================
  onSelectTrek(trek: TrekTour) {
    const rawId = trek.publicId || String(trek.id ?? '');
    const publicRef = this.publicRouteId.encode(rawId) || rawId;
    this.router.navigate(['/tour-details', publicRef]);
  }

  onBook(trek: TrekTour) {
    const token = sessionStorage.getItem('token');  
    if (!token) {
      this.openLoginPanel();
      return;
    }
    else {
      const rawId = trek.publicId || String(trek.id ?? '');
      const publicRef = this.publicRouteId.encode(rawId) || rawId;
      this.router.navigate(['/booking', publicRef]);
    }
  }

  async openLoginPanel() {
    try {
      const res = await this.authModal.openLogin();
    } catch (err) {
    }
  }

  // ===============================
  // DIFFICULTY LABEL
  // ===============================
  diffLabel(d: string): string {
    const map: any = {
      easy: '🟢 Easy',
      moderate: '🟡 Moderate',
      hard: '🔴 Hard'
    };

    return map[d?.toLowerCase()] ?? d;
  }

  private buildDifficultyOptions() {
    const uniqueDifficulties = new Set(
      this.allTreks
        .map((trek) => (trek.difficulty || '').trim().toLowerCase())
        .filter(Boolean)
    );

    this.difficultyOptions = Array.from(uniqueDifficulties).map((difficulty) => ({
      value: difficulty,
      label: this.diffLabel(difficulty),
    }));
  }

  // ===============================
  // RANDOM GRADIENT
  // ===============================
  randomGradient(): string {
    const gradients = [
      'linear-gradient(135deg, #1a3a5c, #2d6a8a)',
      'linear-gradient(135deg, #1e4a2a, #3d8a50)',
      'linear-gradient(135deg, #2a1a3a, #5a3a8a)',
      'linear-gradient(135deg, #3a2a1a, #7a5030)',
      'linear-gradient(135deg, #1a3a2a, #2d6a5a)'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  }
}

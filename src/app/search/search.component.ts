import {
  Component,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

export interface TrekTour {
  id?: string;
  name: string;
  description: string;
  location: string;
  difficulty: 'easy' | 'moderate' | 'hard';
  price: number;
  date?: string;
  duration?: string;
  rating?: number;
  reviews?: number;
  maxGroupSize?: number;
  featured?: boolean;
  coverColor?: string;
  landscapePath?: string;
}

export interface SearchParams {
  location: string;
  difficulty: string;
  priceMin: number | null;
  priceMax: number | null;
  date: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {

  loading = false;
  error: string | null = null;
  treksTours: TrekTour[] = [];

  searchParams: SearchParams = {
    location: '',
    difficulty: '',
    priceMin: null,
    priceMax: null,
    date: '',
  };

  readonly defaultLandscape =
    'M0 120 L60 60 L100 85 L150 30 L200 70 L260 20 L320 65 L370 40 L400 55 L400 120Z';

  ngOnInit() {
    this.loadInitial();
  }

  loadInitial() {
    this.loading = true;
    setTimeout(() => {
      this.treksTours = MOCK_TREKS;
      this.loading = false;
    }, 1000);
  }

  onSearch() {
    this.loading = true;
    this.error = null;

    // Replace with real API call:
    // this.trekService.search(this.searchParams).subscribe({ ... })
    setTimeout(() => {
      this.treksTours = MOCK_TREKS.filter(t => {
        const locMatch = !this.searchParams.location ||
          t.location.toLowerCase().includes(this.searchParams.location.toLowerCase()) ||
          t.name.toLowerCase().includes(this.searchParams.location.toLowerCase());
        const diffMatch = !this.searchParams.difficulty || t.difficulty === this.searchParams.difficulty;
        const minMatch = !this.searchParams.priceMin || t.price >= this.searchParams.priceMin;
        const maxMatch = !this.searchParams.priceMax || t.price <= this.searchParams.priceMax;
        return locMatch && diffMatch && minMatch && maxMatch;
      });
      this.loading = false;
    }, 800);
  }

  resetSearch() {
    this.searchParams = { location: '', difficulty: '', priceMin: null, priceMax: null, date: '' };
    this.loadInitial();
  }

  onSelectTrek(trek: TrekTour) {
    console.log('Selected trek:', trek);
    // router.navigate(['/trek', trek.id])
  }

  onBook(trek: TrekTour) {
    console.log('Booking trek:', trek);
    // router.navigate(['/book', trek.id])
  }

  diffLabel(d: string): string {
    return { easy: '🟢 Easy', moderate: '🟡 Moderate', hard: '🔴 Hard' }[d] ?? d;
  }
}

// ── Mock data ─────────────────────────────────────────────────────────────────
const MOCK_TREKS: TrekTour[] = [
  {
    id: '1', name: 'Roopkund Glacier Trek', location: 'Uttarakhand, India',
    difficulty: 'hard', price: 18500, duration: '8 days', date: '2025-03-15',
    rating: 4.9, reviews: 312, maxGroupSize: 14, featured: true,
    description: 'Trek to the mysterious skeleton lake at 16,500 ft through dense forests and alpine meadows.',
    coverColor: 'linear-gradient(135deg, #1a3a5c 0%, #2d6a8a 50%, #4a9bbe 100%)',
    landscapePath: 'M0 120 L50 50 L90 80 L140 20 L200 55 L260 10 L330 50 L400 30 L400 120Z',
  },
  {
    id: '2', name: 'Valley of Flowers', location: 'Chamoli, Uttarakhand',
    difficulty: 'easy', price: 9800, duration: '6 days', date: '2025-07-10',
    rating: 4.7, reviews: 548, maxGroupSize: 20,
    description: 'A UNESCO World Heritage trek through a blooming alpine meadow bursting with rare Himalayan flora.',
    coverColor: 'linear-gradient(135deg, #1e4a2a 0%, #3d8a50 50%, #7ea76b 100%)',
    landscapePath: 'M0 120 L80 70 L140 95 L200 50 L280 75 L360 40 L400 60 L400 120Z',
  },
  {
    id: '3', name: 'Chadar Frozen River', location: 'Zanskar, Ladakh',
    difficulty: 'hard', price: 24000, duration: '10 days', date: '2025-01-20',
    rating: 5.0, reviews: 189, maxGroupSize: 10, featured: true,
    description: 'Walk on the frozen Zanskar River — one of the most extreme winter treks on earth.',
    coverColor: 'linear-gradient(135deg, #1a1f3a 0%, #2d3f6a 60%, #5a7ac4 100%)',
    landscapePath: 'M0 120 L40 60 L100 85 L170 30 L240 65 L310 20 L380 50 L400 40 L400 120Z',
  },
  {
    id: '4', name: 'Hampta Pass Crossing', location: 'Kullu, Himachal Pradesh',
    difficulty: 'moderate', price: 12500, duration: '5 days', date: '2025-06-05',
    rating: 4.6, reviews: 421, maxGroupSize: 16,
    description: 'Cross a dramatic high-altitude pass connecting the lush Kullu valley to the barren Lahaul plateau.',
    coverColor: 'linear-gradient(135deg, #3a2a1a 0%, #7a5030 50%, #c49060 100%)',
    landscapePath: 'M0 120 L60 80 L120 55 L190 85 L250 35 L320 60 L390 30 L400 35 L400 120Z',
  },
  {
    id: '5', name: 'Kedarkantha Summit', location: 'Uttarkashi, Uttarakhand',
    difficulty: 'moderate', price: 8200, duration: '6 days', date: '2025-12-22',
    rating: 4.8, reviews: 676, maxGroupSize: 18,
    description: 'The perfect winter trek with stunning 360° Himalayan views from the 12,500 ft summit.',
    coverColor: 'linear-gradient(135deg, #2a1a3a 0%, #5a3a8a 60%, #9a70c4 100%)',
    landscapePath: 'M0 120 L70 55 L130 80 L200 25 L270 60 L340 35 L400 55 L400 120Z',
  },
  {
    id: '6', name: 'Dzongri & Goecha La', location: 'Sikkim, India',
    difficulty: 'hard', price: 21000, duration: '11 days', date: '2025-04-18',
    rating: 4.9, reviews: 143, maxGroupSize: 12,
    description: 'Trek close to Mt. Kanchenjunga, the world\'s third highest peak, through pristine rhododendron forests.',
    coverColor: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a5a 50%, #5abaa0 100%)',
    landscapePath: 'M0 120 L50 65 L110 90 L160 35 L230 70 L300 15 L370 50 L400 40 L400 120Z',
  },
];
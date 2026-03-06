import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Dashboard } from './dashboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownOption, DropdownService } from '../core/dropdown.service';
import { PublicRouteIdService } from '../core/public-route-id.service';
import { environment } from 'src/environments/environment';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Filter {
  id: string;
  label: string;
}

interface CuratedCollection {
  id: string;
  label: string;
  ruleKey: 'all' | 'beginner' | 'weekend' | 'budget' | 'scenic' | 'custom';
}

interface TrekCard {
  id: string;
  name: string;
  category: string;
  location: string;
  duration: string;
  durationDays: number;
  difficulty: string;
  price: number;
  groupSize: string;
  image: string | null;
  date: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  availableSlots: number | null;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private dashboardService: Dashboard,
    private dropdownService: DropdownService,
    private publicRouteId: PublicRouteIdService
  ) { }

  treks: TrekCard[] = [];
  selectedFilter: string = 'all';
  selectedCollection = 'all';
  searchQuery = '';
  sortBy: string = 'recommended';
  isLoading = false;
  errorMessage = '';
  readonly initialVisibleCount = 4;
  readonly visibleStep = 4;
  visibleCount = this.initialVisibleCount;
  compareTreks: TrekCard[] = [];
  readonly maxCompareCount = 3;
  readonly supportPhone = '+919876543210';
  readonly mediaBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  sortOptions: DropdownOption[] = [];
  showComparePanel = false;
  compareNotice = '';
  isCompareLoading = false;
  averageRating = 0;
  trekkersThisYear = 0;
  activeRoutes = 0;

  filters: Filter[] = [];

  collections: CuratedCollection[] = [];
  private collectionRuleById: Record<string, CuratedCollection['ruleKey']> = {};

  ngOnInit() {
    this.loadSortOptions();
    this.loadDifficultyFilters();
    this.loadCollectionOptions();
    this.isLoading = true;
    this.dashboardService.loadDashboardData().subscribe((data: any) => {
      if (data.success === true) {
        this.isLoading = false;
        const payload = data?.data || {};
        const trekRows = Array.isArray(payload?.treks)
          ? payload.treks
          : Array.isArray(payload)
            ? payload
            : [];

        this.treks = trekRows.map((trek: any) => this.mapTourData(trek));
        const summary = payload?.summary || {};
        this.averageRating = Number(summary.averageRating || 0);
        this.trekkersThisYear = Number(summary.trekkersThisYear || 0);
        this.activeRoutes = Number(summary.activeRoutes || 0);
      }
    });
  }

  private loadSortOptions() {
    const fallback: DropdownOption[] = [
      { value: 'recommended', label: 'Recommended' },
      { value: 'price_low', label: 'Price: Low to High' },
      { value: 'price_high', label: 'Price: High to Low' },
      { value: 'duration_short', label: 'Duration: Shortest' },
    ];

    // Keep sort options local until backend exposes a stable dropdown key for this.
    this.sortOptions = fallback;
    if (!this.sortOptions.some((option) => option.value === this.sortBy)) {
      this.sortBy = this.sortOptions[0]?.value || 'recommended';
    }
  }

  private loadDifficultyFilters() {
    const fallback: DropdownOption[] = [];

    this.dropdownService.getOptions('trek-filters', fallback).subscribe((options) => {
      const mapped: Filter[] = options
        .filter((option) => !!option.value)
        .map((option) => ({
          id: String(option.value).toLowerCase(),
          label: option.label,
        }));

      this.filters = mapped;

      if (!this.filters.some((filter) => filter.id === this.selectedFilter)) {
        this.selectedFilter = 'all';
      }
    });
  }

  private loadCollectionOptions() {
    const fallback: DropdownOption[] = [];

    this.dropdownService.getOptions('trek-collections', fallback).subscribe((collectionOptions) => {
      if (collectionOptions.length) {
        this.applyCollectionOptions(collectionOptions);
        return;
      }

      // Backend currently exposes trek-category, so use it when trek-collections is unavailable.
      this.dropdownService.getOptions('trek-category', fallback).subscribe((categoryOptions) => {
        this.applyCollectionOptions(categoryOptions);
      });
    });
  }

  private applyCollectionOptions(options: DropdownOption[]) {
    const mapped: CuratedCollection[] = options.map((option) => {
      const ruleKey = this.inferCollectionRule(option.value, option.label);
      return {
        id: option.value,
        label: option.label,
        ruleKey,
      };
    });

    const hasAll = mapped.some((item) => item.ruleKey === 'all');
    this.collections = hasAll
      ? mapped
      : [{ id: 'all', label: 'All', ruleKey: 'all' }, ...mapped];

    this.collectionRuleById = this.collections.reduce((acc, collection) => {
      acc[collection.id] = collection.ruleKey;
      return acc;
    }, {} as Record<string, CuratedCollection['ruleKey']>);

    if (!this.collections.some((collection) => collection.id === this.selectedCollection)) {
      this.selectedCollection = 'all';
    }
  }

  private inferCollectionRule(id: string, label: string): CuratedCollection['ruleKey'] {
    const token = `${id} ${label}`.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    if (/\ball\b/.test(token)) return 'all';
    if (/\bbeginner\b|\bnewbie\b|\beasy\b/.test(token)) return 'beginner';
    if (/\bweekend\b|\bshort\b|\bquick\b|\bone day\b|\b1 day\b|\btwo day\b|\b2 day\b/.test(token)) return 'weekend';
    if (/\bbudget\b|\bvalue\b|\bafford\b|\bcheap\b|\blow cost\b/.test(token)) return 'budget';
    if (/\bscenic\b|\bviews?\b|\bnature\b|\bwaterfall\b|\bsunrise\b|\blake\b/.test(token)) return 'scenic';
    return 'custom';
  }

  mapTourData(result: any): TrekCard {
    const primaryBatch = this.extractPrimaryBatch(result);
    const baseAvailableSlots =
      primaryBatch?.availableSlots ??
      primaryBatch?.available_slots ??
      result?.availableSlots ??
      result?.available_slots ??
      null;
    const bookedSlots = primaryBatch?.bookedSlots ?? primaryBatch?.booked_slots ?? 0;
    const computedSlots = typeof baseAvailableSlots === 'number'
      ? Math.max(baseAvailableSlots - bookedSlots, 0)
      : null;

    return {
      id: String(result.public_ref || result.uuid || result.id || result.trekId || ''),
      name: result.name,
      category: result.category || '',
      location: result.location,
      duration: primaryBatch?.duration || result.duration || 'N/A',
      durationDays: this.getDurationInDays(primaryBatch?.duration || result.duration || ''),
      difficulty: result.difficulty,
      price: Number(primaryBatch?.price || result.price || 0),
      groupSize: `${result.min_participants} - ${result.max_participants}`,
      image: result.cover_image
        ? `${this.mediaBaseUrl}${result.cover_image}`
        : null,
      date: this.formatDateRange(
        primaryBatch?.startDate || result.startDate,
        primaryBatch?.endDate || result.endDate
      ),
      highlights: Array.isArray(result.highlights)
        ? result.highlights
        : (result.highlights || '').split(',').map((item: string) => item.trim()).filter(Boolean),
      inclusions: this.resolveList(
        [primaryBatch, ...(Array.isArray(result?.batches) ? result.batches : []), result],
        ['inclusions', 'inclusion', 'included', 'includes', 'included_items']
      ),
      exclusions: this.resolveList(
        [primaryBatch, ...(Array.isArray(result?.batches) ? result.batches : []), result],
        ['exclusions', 'exclusion', 'excluded', 'excludes', 'excluded_items']
      ),
      availableSlots: computedSlots,
      rating: Number(result.rating || 0),
      reviews: Number(result.reviews || 0),
    };
  }

  private computeAverageRating(list: TrekCard[]): number {
    const rated = list.filter((item) => item.rating > 0);
    if (!rated.length) return 0;
    const total = rated.reduce((sum, item) => sum + item.rating, 0);
    return Number((total / rated.length).toFixed(1));
  }

  private computeActiveRoutes(list: TrekCard[]): number {
    const unique = new Set(list.map((item) => item.id));
    return unique.size;
  }

  private resolveList(sources: any[], keys: string[]): string[] {
    for (const source of sources) {
      if (!source || typeof source !== 'object') continue;
      for (const key of keys) {
        const parsed = this.normalizeList(source[key]);
        if (parsed.length) return parsed;
      }
    }
    return [];
  }

  private normalizeList(value: any): string[] {
    if (value == null) return [];

    if (Array.isArray(value)) {
      return value
        .map((item) => String(item).trim())
        .filter(Boolean);
    }

    if (typeof value === 'string') {
      const raw = value.trim();
      if (!raw) return [];

      if (raw.startsWith('[') || raw.startsWith('{')) {
        try {
          const parsed = JSON.parse(raw);
          return this.normalizeList(parsed);
        } catch {
          // Fallback to delimiter split below
        }
      }

      return raw
        .split(/\r?\n|,|;|\|/)
        .map((item) => item.replace(/^[\-\u2022]\s*/, '').trim())
        .filter(Boolean);
    }

    if (typeof value === 'object') {
      if (Array.isArray(value.items)) return this.normalizeList(value.items);
      return Object.values(value)
        .map((item) => String(item).trim())
        .filter(Boolean);
    }

    return [];
  }

  private extractPrimaryBatch(result: any) {
    if (Array.isArray(result?.batches) && result.batches.length) {
      return result.batches[0];
    }
    if (result?.batch) {
      return result.batch;
    }
    return null;
  }

  private getDurationInDays(duration: string): number {
    const dayMatch = duration?.toLowerCase().match(/(\d+)\s*day/);
    if (dayMatch) {
      return Number(dayMatch[1]);
    }

    const fallback = duration?.match(/\d+/);
    return fallback ? Number(fallback[0]) : 0;
  }

  formatDateRange(start: string, end: string): string {
    if (!start || !end) return '';

    const s = new Date(start);
    const e = new Date(end);

    const sDay = s.getDate().toString().padStart(2, '0');
    const eDay = e.getDate().toString().padStart(2, '0');

    const sMonth = s.toLocaleString('en-GB', { month: 'short' });
    const eMonth = e.toLocaleString('en-GB', { month: 'short' });

    const sYear = s.getFullYear();
    const eYear = e.getFullYear();

    // same day
    if (s.toDateString() === e.toDateString()) {
      return `${sDay} ${sMonth} ${sYear}`;
    }

    // same month & year
    if (sMonth === eMonth && sYear === eYear) {
      return `${sDay}-${eDay} ${sMonth} ${sYear}`;
    }

    // different month or year
    if (sYear === eYear) {
      return `${sDay} ${sMonth} - ${eDay} ${eMonth} ${sYear}`;
    }

    // different year
    return `${sDay} ${sMonth} ${sYear} - ${eDay} ${eMonth} ${eYear}`;
  }



  get filteredTreks(): TrekCard[] {
    const list = this.getProcessedTreks();
    return list.slice(0, this.visibleCount);
  }

  get totalFilteredCount(): number {
    return this.getProcessedTreks().length;
  }

  get hasMoreTreks(): boolean {
    return this.visibleCount < this.totalFilteredCount;
  }

  get hasActiveDiscoveryFilters(): boolean {
    return this.selectedFilter !== 'all' || this.selectedCollection !== 'all' || !!this.searchQuery.trim();
  }

  private getProcessedTreks(): TrekCard[] {
    const search = this.searchQuery.trim().toLowerCase();

    let list = this.treks.filter((trek) => {
      const difficultyMatch =
        this.selectedFilter === 'all' || trek.difficulty?.toLowerCase() === this.selectedFilter;
      const collectionMatch = this.matchesCollection(trek, this.selectedCollection);
      const searchMatch =
        !search ||
        trek.name.toLowerCase().includes(search) ||
        trek.location.toLowerCase().includes(search) ||
        trek.highlights.some((highlight) => highlight.toLowerCase().includes(search));
      return difficultyMatch && collectionMatch && searchMatch;
    });

    list = [...list].sort((a, b) => {
      if (this.sortBy === 'price_low') return a.price - b.price;
      if (this.sortBy === 'price_high') return b.price - a.price;
      if (this.sortBy === 'duration_short') return a.durationDays - b.durationDays;
      return 0;
    });

    return list;
  }

  private matchesCollection(trek: TrekCard, collectionId: string): boolean {
    const ruleKey = this.collectionRuleById[collectionId] || this.inferCollectionRule(collectionId, collectionId);

    if (ruleKey === 'all') return true;
    if (ruleKey === 'beginner') return trek.difficulty?.toLowerCase() === 'easy';
    if (ruleKey === 'weekend') return trek.durationDays > 0 && trek.durationDays <= 2;
    if (ruleKey === 'budget') return trek.price <= 1999;
    if (ruleKey === 'scenic') {
      return trek.highlights.some((highlight) =>
        /waterfall|sunrise|sunset|forest|ridge|lake|view/i.test(highlight)
      );
    }
    if (ruleKey === 'custom') {
      const selected = this.collections.find((collection) => collection.id === collectionId);
      const selectedKey = this.toSlug(selected?.label || collectionId);
      const trekCategoryKey = this.toSlug(trek.category || '');
      return !!selectedKey && trekCategoryKey === selectedKey;
    }
    return true;
  }

  private toSlug(value: string): string {
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

setFilter(filterId: string): void {
  this.selectedFilter = filterId;
  this.visibleCount = this.initialVisibleCount;
}

setCollection(collectionId: string): void {
  this.selectedCollection = collectionId;
  this.visibleCount = this.initialVisibleCount;
}

clearDiscoveryFilters(): void {
  this.selectedFilter = 'all';
  this.selectedCollection = 'all';
  this.searchQuery = '';
  this.sortBy = 'recommended';
  this.visibleCount = this.initialVisibleCount;
}

showMoreTreks(): void {
  this.visibleCount = Math.min(this.visibleCount + this.visibleStep, this.totalFilteredCount);
}

showLessTreks(): void {
  this.visibleCount = this.initialVisibleCount;
  setTimeout(() => {
    const header = document.querySelector('.content-header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 30);
}

  toggleCompare(trek: TrekCard): void {
    const exists = this.compareTreks.some((item) => item.id === trek.id);
    if (exists) {
      this.compareTreks = this.compareTreks.filter((item) => item.id !== trek.id);
      if (this.compareTreks.length < 2) {
        this.showComparePanel = false;
      }
      return;
    }
    if (this.compareTreks.length >= this.maxCompareCount) {
      this.compareNotice = `You can compare up to ${this.maxCompareCount} treks at a time.`;
      return;
    }
    this.compareNotice = '';
    this.compareTreks = [...this.compareTreks, trek];
  }

  isCompared(trekId: string): boolean {
    return this.compareTreks.some((item) => item.id === trekId);
  }

  canAddToCompare(trek: TrekCard): boolean {
    return this.isCompared(trek.id) || this.compareTreks.length < this.maxCompareCount;
  }

  removeCompared(trekId: string): void {
    this.compareTreks = this.compareTreks.filter((item) => item.id !== trekId);
    if (this.compareTreks.length < 2) {
      this.showComparePanel = false;
    }
  }

  clearCompare(): void {
    this.compareTreks = [];
    this.showComparePanel = false;
    this.compareNotice = '';
  }

  openComparePanel(): void {
    if (this.compareTreks.length < 2) {
      this.compareNotice = 'Select at least 2 treks to compare.';
      return;
    }
    this.compareNotice = '';
    this.isCompareLoading = true;

    const requests = this.compareTreks.map((trek) =>
      this.dashboardService.getTrekByIdOrUuid(trek.id).pipe(
        catchError(() => of(null))
      )
    );

    forkJoin(requests).subscribe({
      next: (responses: any[]) => {
        this.compareTreks = this.compareTreks.map((trek, index) => {
          const detailResponse = responses[index];
          const detailTrek = this.extractDetailTrek(detailResponse);
          if (!detailTrek) return trek;
          return this.mergeCompareData(trek, detailTrek);
        });

        this.showComparePanel = true;
        this.isCompareLoading = false;
      },
      error: () => {
        this.compareNotice = 'Could not load full compare details. Showing available data.';
        this.showComparePanel = true;
        this.isCompareLoading = false;
      },
    });
  }

  closeComparePanel(): void {
    this.showComparePanel = false;
  }

  private extractDetailTrek(response: any): any | null {
    if (!response) return null;
    const data = response.data;
    if (!data) return null;

    if (data?.trek) return data.trek;
    if (data?.result) return data.result;
    if (Array.isArray(data) && data.length) return data[0];
    if (typeof data === 'object') return data;

    return null;
  }

  private mergeCompareData(base: TrekCard, detail: any): TrekCard {
    const sources = [detail?.batch, ...(Array.isArray(detail?.batches) ? detail.batches : []), detail];

    const mergedHighlights = base.highlights?.length
      ? base.highlights
      : this.resolveList(sources, ['highlights', 'highlight', 'top_highlights']);

    const mergedInclusions = base.inclusions?.length
      ? base.inclusions
      : this.resolveList(
          sources,
          ['inclusions', 'inclusion', 'included', 'includes', 'included_items']
        );

    const mergedExclusions = base.exclusions?.length
      ? base.exclusions
      : this.resolveList(
          sources,
          ['exclusions', 'exclusion', 'excluded', 'excludes', 'excluded_items']
        );

    return {
      ...base,
      highlights: mergedHighlights,
      inclusions: mergedInclusions,
      exclusions: mergedExclusions,
    };
  }

  openCompareInWhatsApp(): void {
    if (!this.compareTreks.length) return;

    const message = [
      'Hi, I want help comparing these treks:',
      ...this.compareTreks.map((trek, index) =>
        `${index + 1}. ${trek.name} (${trek.location}) - ₹${trek.price} - ${trek.duration}`
      ),
      'Please suggest the best option based on my fitness and budget.',
    ].join('\n');

    const url = `https://wa.me/${this.supportPhone.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openTrekEnquiry(trek: TrekCard): void {
    const message = `Hi, I want details for ${trek.name} trek (${trek.date}).`;
    const url = `https://wa.me/${this.supportPhone.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  getAvailabilityLabel(trek: TrekCard): string {
    if (trek.availableSlots === null) return 'Check Availability';
    if (trek.availableSlots <= 0) return 'Sold Out';
    if (trek.availableSlots <= 5) return `Only ${trek.availableSlots} left`;
    return `${trek.availableSlots} slots open`;
  }

  getAvailabilityClass(trek: TrekCard): string {
    if (trek.availableSlots === null) return 'is-unknown';
    if (trek.availableSlots <= 0) return 'is-sold';
    if (trek.availableSlots <= 5) return 'is-low';
    return 'is-open';
  }

  trackByTrek(_: number, trek: TrekCard): string {
    return trek.id;
  }

  viewDetails(trek: TrekCard): void {
      const publicRef = this.publicRouteId.encode(trek.id) || trek.id;
      this.router.navigate(['/tour-details', publicRef]);
  }
}

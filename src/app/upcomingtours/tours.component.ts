// tours.component.ts - UPDATED with API integration

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrekListItem, Upcomingtours } from './upcomingtours';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink],
})
export class ToursComponent implements OnInit {

  selectedYear: number = new Date().getFullYear();
  selectedMonth: string = '';

  years: number[] = [];
  availableYears: number[] = []; // Years with actual trek data

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  allTreks: TrekListItem[] = [];
  monthTreksData: { [key: string]: TrekListItem[] } = {};
  isLoading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private trekService: Upcomingtours,
     private location: Location
  ) { }

  ngOnInit() {
    this.initializeYears();
    this.setInitialMonth();
    this.loadAvailableYears();
    this.loadTreks();
  }

  /**
   * Initialize years array dynamically
   * Shows current year ± 2 years
   */
  initializeYears() {
    const currentYear = new Date().getFullYear();

    // Generate years: current year - 1, current year, current year + 1, current year + 2
    this.years = [
      currentYear - 1,
      currentYear,
      currentYear + 1,
      currentYear + 2
    ];

    // Set selected year to current year or next year if current month is December
    const currentMonth = new Date().getMonth();
    if (currentMonth === 11) { // December
      this.selectedYear = currentYear + 1;
    } else {
      this.selectedYear = currentYear;
    }
  }

  /**
   * Set initial month to current month or next month
   */
  setInitialMonth() {
    const currentMonth = new Date().getMonth();
    this.selectedMonth = this.months[currentMonth];
  }

  /**
   * Load years that have trek data from backend
   */
  loadAvailableYears() {
    this.trekService.getAvailableYears().subscribe({
      next: (response:any) => {
        if (response.success && response.years) {
          this.availableYears = response.years;

          // Update years array to include all available years
          this.updateYearsWithAvailable(response.years);
        }
      },
      error: (error: any) => {
        console.error('Load available years error:', error);
        // Continue with default years if API fails
      }
    });
  }

loadTreks() {
    this.isLoading = true;
    this.errorMessage = '';

    this.trekService.getAllTreksFormatted(this.selectedYear)
      .subscribe({
        next: (treks: TrekListItem[]) => {
          this.allTreks = treks || [];
          this.groupTreksByMonth();
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Load treks error:', error);
          this.errorMessage = 'Failed to load treks. Please try again.';
          this.allTreks = [];
          this.isLoading = false;
        }
      });
  }
  destroy$(destroy$: any): import("rxjs").OperatorFunction<TrekListItem[], unknown> {
    throw new Error('Method not implemented.');
  }

  /**
   * Update years array to include years from database
   */
  updateYearsWithAvailable(availableYears: number[]) {
    if (availableYears.length === 0) return;

    const minYear = Math.min(...availableYears);
    const maxYear = Math.max(...availableYears);
    const currentYear = new Date().getFullYear();

    // Create range from min available year to max(current year + 2, max available year)
    const startYear = Math.min(minYear, currentYear - 1);
    const endYear = Math.max(maxYear, currentYear + 2);

    this.years = [];
    for (let year = startYear; year <= endYear; year++) {
      this.years.push(year);
    }

    // Ensure selected year is valid
    if (!this.years.includes(this.selectedYear)) {
      this.selectedYear = currentYear;
    }
  }

  /**
   * Load all treks for the selected year
   */


  /**
   * Group treks by month
   */
  groupTreksByMonth() {
    this.monthTreksData = {};

    this.allTreks.forEach(trek => {
      const trekDate = new Date(trek.start_date);
      const monthName = this.months[trekDate.getMonth()];

      if (!this.monthTreksData[monthName]) {
        this.monthTreksData[monthName] = [];
      }
      this.monthTreksData[monthName].push(trek);
    });

    // Sort treks within each month by start date
    Object.keys(this.monthTreksData).forEach(month => {
      this.monthTreksData[month].sort((a, b) => {
        return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
      });
    });
  }

  /**
   * Get treks for selected month
   */
  get monthTreks(): { [key: string]: TrekListItem[] } {
    return this.monthTreksData;
  }

  /**
   * Get current month treks
   */
  get currentMonthTreks(): TrekListItem[] {
    return this.monthTreksData[this.selectedMonth] || [];
  }

  /**
   * Get trek count for current month
   */
  get trekCount(): number {
    return this.currentMonthTreks.length;
  }

  /**
   * Change year
   */
  changeYear(direction: 'prev' | 'next') {
    const currentIndex = this.years.indexOf(this.selectedYear);
    if (direction === 'prev' && currentIndex > 0) {
      this.selectedYear = this.years[currentIndex - 1];
      this.loadTreks();
    } else if (direction === 'next' && currentIndex < this.years.length - 1) {
      this.selectedYear = this.years[currentIndex + 1];
      this.loadTreks();
    }
  }

  /**
   * Check if year has data
   */
  yearHasData(year: number): boolean {
    return this.availableYears.includes(year);
  }

  /**
   * Get previous year
   */
  get previousYear(): number | null {
    const currentIndex = this.years.indexOf(this.selectedYear);
    return currentIndex > 0 ? this.years[currentIndex - 1] : null;
  }

  /**
   * Get next year
   */
  get nextYear(): number | null {
    const currentIndex = this.years.indexOf(this.selectedYear);
    return currentIndex < this.years.length - 1 ? this.years[currentIndex + 1] : null;
  }

  /**
   * Check if previous year button should be disabled
   */
  get isPrevYearDisabled(): boolean {
    return this.previousYear === null || this.isLoading;
  }

  /**
   * Check if next year button should be disabled
   */
  get isNextYearDisabled(): boolean {
    return this.nextYear === null || this.isLoading;
  }

  /**
   * Change month
   */
  selectMonth(month: string) {
    this.selectedMonth = month;
  }

  /**
   * Get status color (for badge)
   */
  getStatusColor(status: string): string {
    switch (status) {
      case 'available': return 'success';
      case 'selling-fast': return 'warning';
      case 'last-seat': return 'danger';
      case 'sold-out': return 'medium';
      default: return 'medium';
    }
  }

  /**
   * Get status text
   */
  getStatusText(status: string): string {
    switch (status) {
      case 'available': return 'Available';
      case 'selling-fast': return 'Selling fast';
      case 'last-seat': return 'Last seat';
      case 'sold-out': return 'SOLD OUT';
      default: return status;
    }
  }

  /**
   * Navigate to trek details
   */
  viewDetails(trekId: number) {
    this.router.navigate(['/tour-details', trekId]);
  }

  /**
   * Parse duration string to minutes for comparison
   */
  private parseDuration(duration: string): number {
    const match = duration.match(/(\d+)\s*(Day|Days|Hour|Hours|Minute|Minutes)/i);
    if (!match) return 0;

    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();

    if (unit.includes('day')) {
      return value * 24 * 60; // Convert to minutes
    } else if (unit.includes('hour')) {
      return value * 60;
    } else {
      return value;
    }
  }

  /**
   * Get count for a specific month
   */
  getMonthCount(month: string): number {
    return this.monthTreksData[month]?.length || 0;
  }

  goBack() {
  if (window.history.length > 1) {
    this.location.back();
  } else {
    this.router.navigate(['/']);
  }
}
}

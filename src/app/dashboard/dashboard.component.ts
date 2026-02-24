import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Dashboard } from './dashboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Filter {
  id: string;
  label: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private dashboardService: Dashboard) { }

  treks: any[] = []; // Changed to array
  selectedFilter: string = 'all';
  isLoading = false;
  errorMessage = '';

  filters: Filter[] = [
    { id: 'all', label: 'All Treks' },
    { id: 'easy', label: 'Easy' },
    { id: 'moderate', label: 'Moderate' },
    { id: 'challenging', label: 'Challenging' }
  ];

  ngOnInit() {
    this.isLoading = true;
    this.dashboardService.loadDashboardData().subscribe((data: any) => {
      if (data.success === true) {
        this.isLoading = false;
        // Check if data.data is an array or single object
        if (Array.isArray(data.data)) {
          this.treks = data.data.map((trek: any) => this.mapTourData(trek));
        } else {
          // If it's a single object, wrap it in an array
          this.treks = [this.mapTourData(data.data)];
        }
      }
    });
  }

  mapTourData(result: any) {
    return {
      id: result.id,
      name: result.name,
      location: result.location,
      duration: result.duration,
      difficulty: result.difficulty,
      price: Number(result.price),
      rating: 4.8,
      reviewCount: 145,
      groupSize: `${result.min_participants} - ${result.max_participants}`,

      // Cover image URL construction
      image: result.cover_image
        ? `http://localhost:4001/${result.cover_image}`
        : null,

      date: this.formatDateRange(result.startDate, result.endDate),

      highlights: result.highlights || [],
    };
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


  get filteredTreks() :void | any{
    if (this.selectedFilter === 'all') {
      return this.treks;
    }
    return this.treks.filter((trek: any) =>
      trek.difficulty.toLowerCase() === this.selectedFilter
    );
  }

  setFilter(filterId: string): void {
    this.selectedFilter = filterId;
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'success';
      case 'moderate': return 'warning';
      case 'challenging': return 'danger';
      default: return 'medium';
    }
  }

  viewDetails(trek: any): void {
      this.router.navigate(['/tour-details', trek.id]);
  }
}

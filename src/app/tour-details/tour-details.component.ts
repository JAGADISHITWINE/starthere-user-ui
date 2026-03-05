import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TourDetails } from './tour-details';
import { AuthModalService } from '../auth/auth-modal.service';
import { Location } from '@angular/common';
import { PublicRouteIdService } from '../core/public-route-id.service';
import { environment } from 'src/environments/environment';


interface Activity {
  activityTime: string;
  activityText: string;
}

interface ItineraryDay {
  day_number: number;
  title: string;
  activities: Activity[];
}

interface Batch {
  start_date: string;
  end_date: string;
  available_slots: number;
  booked_slots: number;
  price: string;
  duration: string;
  status: string;
  inclusions: string[];
  exclusions: string[];
  itineraryDays: ItineraryDay[];
}

interface Tour {
  id: number;
  name: string;
  location: string;
  category: string;
  difficulty: string;
  fitness_level: string;
  description: string;
  cover_image: string;
  highlights: string[];
  thingsToCarry: string[];
  importantNotes: string[];
  galleryImages: string[];
  batches: Batch[];
}

interface MappedTour {
  id: number;
  name: string;
  location: string;
  category: string;
  difficulty: string;
  fitnessLevel: string;
  duration: string;
  price: number;
  rating: number;
  reviewCount: number;
  views: number;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  thingsToCarry: string[];
  importantNotes: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    activities: Activity[];
  }[];
  nextDates: string[];
  availableSlots: any;
  minAge: number;
  maxAge: number;
}

interface SafetyPoint {
  title: string;
  detail: string;
}

interface TrekFaq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, RouterLink],
})
export class TourDetailsComponent implements OnInit {
  tour: MappedTour | null = null;
  isLoading = true;
  tourUuid: string = '';
  routeRef: string = '';
  selectedSegment: string = 'overview';
  openFaqIndex = -1;

  baseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  readonly supportPhone = '+919876543210';
  readonly prepChecklist = [
    'Walk 4-5 km daily for at least 2 weeks before the trek',
    'Stay hydrated and avoid heavy meals before ascent day',
    'Carry one reusable bottle and avoid single-use plastics',
    'Keep emergency contacts saved and accessible offline',
  ];
  readonly safetyPoints: SafetyPoint[] = [
    {
      title: 'Certified Trek Leads',
      detail: 'Every batch is led by trained trek captains with wilderness first-aid basics.',
    },
    {
      title: 'Emergency Support',
      detail: 'Each route includes evacuation fallback points and nearest hospital mapping.',
    },
    {
      title: 'Weather Monitoring',
      detail: 'Route plans are adjusted using live weather windows to reduce risk.',
    },
  ];
  readonly trekFaqs: TrekFaq[] = [
    {
      question: 'Can beginners join this trek?',
      answer: 'Yes, if the fitness level is Easy/Moderate and you complete basic pre-trek walking practice.',
    },
    {
      question: 'Will transport be arranged?',
      answer: 'Transport availability depends on the selected batch plan. Please check inclusions for your batch.',
    },
    {
      question: 'What if weather conditions are unsafe?',
      answer: 'The route can be modified or postponed for safety. You will be informed in advance.',
    },
    {
      question: 'How early should I reach the pickup point?',
      answer: 'Reach at least 20-30 minutes before the reporting time to avoid delays.',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourDetailsService: TourDetails,
    private authModal: AuthModalService,
    private location: Location,
    private publicRouteId: PublicRouteIdService

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const ref = params.get('uuid');
      if (!ref) return;

      const resolvedUuid = this.publicRouteId.resolve(ref);
      if (!resolvedUuid) return;

      this.routeRef = ref;
      this.tourUuid = resolvedUuid;
      this.isLoading = true;
      this.tour = null;
      this.loadTrekDetails();
    });
  }


  loadTrekDetails() {
    this.isLoading = true;
    this.tourDetailsService.getTrekByUuid(this.tourUuid).subscribe((res: any) => {
      if (res.success) {
        this.isLoading = false;
        this.mapTourData(res.data);
      }
    });
  }

  mapTourData(result: any) {
    const firstBatch = result.batch;
    this.tour = {
      id: firstBatch?.batchId,
      name: result.name,
      location: result.location,
      category: result.category,
      difficulty: result.difficulty,
      fitnessLevel: result.fitness_level,
      duration: firstBatch?.duration || 'N/A',
      price: firstBatch ? Number(firstBatch.price) : 0,
      rating: Number(result.rating || 0),
      reviewCount: Number(result.reviewCount || 0),
      views: Number(result.views || 0),

      // Images
      image: result.cover_image,
      gallery: result.galleryImages || [],

      // Content
      overview: result.description,
      highlights: result.highlights || [],
      thingsToCarry: result.thingsToCarry || [],
      importantNotes: result.importantNotes || [],

      // Batch-specific data
      inclusions: firstBatch?.inclusions || [],
      exclusions: firstBatch?.exclusions || [],

      // Itinerary mapping
      itinerary: firstBatch?.itineraryDays?.map((day: any) => ({
        day: day.day_number,
        title: day.title,
        activities: day.activities || []
      })) || [],

      // Batch dates
      nextDates: result.batches?.map((b: any) =>
        this.formatDate(b.start_date)
      ) || [],

      // Additional info
      availableSlots: firstBatch?.availableSlots - firstBatch?.bookedSlots,
      minAge: firstBatch?.minAge || 0,
      maxAge: firstBatch?.maxAge || 0
    };
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  formatTime(timeString: string): string {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  }

  getDifficultyColor(difficulty: string): string {
    const difficultyMap: { [key: string]: string } = {
      'Easy': 'bg-success text-white',
      'Moderate': 'bg-warning text-dark',
      'Difficult': 'bg-danger text-white',
      'Challenging': 'bg-dark text-white'
    };
    return difficultyMap[difficulty] || 'bg-secondary text-white';
  }

  getImageUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }



  bookTrek(tour: any): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.openLoginPanel();
      return;
    }
    else {
      const bookingRef = this.routeRef || (this.publicRouteId.encode(tour.id) || String(tour.id));
      this.router.navigate(['/booking', bookingRef]);
    }
  }

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? -1 : index;
  }

  openWhatsAppEnquiry(tour: MappedTour): void {
    const message = `Hi, I want to know more about ${tour.name} trek. Please share batch options and preparation guidance.`;
    const url = `https://wa.me/${this.supportPhone.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  async openLoginPanel() {
    try {
      const res = await this.authModal.openLogin();
    } catch (err) {
    }
  }

  // Add these methods to your component

  getBadgeClass(tour: any): string {
    const remaining = tour.availableSlots;

    if (remaining <= 0) {
      return 'bg-danger';
    } else if (remaining <= 3) {
      return 'bg-warning text-dark';
    } else if (remaining <= 10) {
      return 'bg-info text-dark';
    } else {
      return 'bg-success';
    }
  }

  getBadgeText(tour: any): string {
    const remaining = tour.availableSlots;

    if (remaining <= 0) {
      return 'Sold Out';
    } else if (remaining <= 3) {
      return `Only ${remaining} seat${remaining === 1 ? '' : 's'} left!`;
    } else if (remaining <= 10) {
      return `Selling Fast - ${remaining} slots left`;
    } else {
      return `${remaining} slots available`;
    }
  }
  openDay: any;

  toggleDay(day: number) {
    if (this.openDay === day) {
      this.openDay = null; // Close if already open
    } else {
      this.openDay = day; // Open the selected day
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
